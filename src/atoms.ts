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

type travelPlanTourismSpotInput = {
  image: string;
  value: string;
  label: string;
};

export const travelPlanTourismSpotInputState = atom<travelPlanTourismSpotInput>({
  key: "travelPlanTourismSpotInputState",
  default: {
    image: "",
    value: "",
    label: "",
  },
  effects: [],
});

export const firebaseUserIdState = atom<string | undefined>({
  key: "firebaseUserIdState",
  default: undefined,
  effects: [({ setSelf }) => onAuthStateChanged(auth, (user) => setSelf(user?.uid))],
});

type FirebaseUser = Pick<User, "photoURL" | "displayName" | "email">;

export const firebaseUserState = atom<FirebaseUser | undefined>({
  key: "firebaseUserState",
  default: undefined,
  effects: [
    ({ setSelf }) => {
      return onAuthStateChanged(auth, async (user) => {
        if (!user) {
          return;
        }
        const data = {
          photoURL: user.photoURL,
          displayName: user.displayName,
          email: user.email,
        };
        setSelf(data);
      });
    },
  ],
});

export const firebaseTokenState = atom<string | undefined>({
  key: "firebaseTokenState",
  default: undefined,
  effects: [
    ({ setSelf }) => {
      return onAuthStateChanged(auth, async (user) => {
        setSelf(await user?.getIdToken());
      });
    },
  ],
});
