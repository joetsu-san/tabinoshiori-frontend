import { atom } from "recoil";
import { TravelPlanSpot } from "../api/@types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const travelPlanTourismSpotListState = atom<TravelPlanSpot[]>({
  key: "travelPlanTourismSpotListState",
  default: [],
  effects: [],
});

export const travelPlanTourismSpotCountState = atom({
  key: "totalTourismSpotCountState",
  default: 0,
  effects: [],
});

export const firebaseUserIdState = atom<string | undefined>({
  key: "firebaseUserIdState",
  default: undefined,
  effects: [({ setSelf }) => onAuthStateChanged(auth, (user) => setSelf(user?.uid))],
});
