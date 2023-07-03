import { atom } from "recoil";
import { TravelPlanSpot } from "../api/@types";
import { User, onAuthStateChanged } from "firebase/auth";
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

type FirebaseUser = Pick<User, "photoURL" | "displayName" | "email">;

export const firebaseUserState = atom<FirebaseUser | null>({
  key: "firebaseUserState",
  default: undefined,
  effects: [
    ({ setSelf }) => {
      const user = auth.currentUser;
      if (!user) return setSelf(null);
      const data = {
        photoURL: user.photoURL,
        displayName: user?.displayName,
        email: user?.email,
      };
      setSelf(data);
    },
  ],
});
