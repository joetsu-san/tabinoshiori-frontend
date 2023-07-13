import { AtomEffect, atom, atomFamily } from "recoil";
import { TravelPlanSpot } from "@/@types";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { client } from "./lib/aspida";
import { TravelPlan, subscribeRemoteTravelPlan } from "./utils/subscribeRemoteTravelPlan";

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

type TravelPlanTourismSpotInput = {
  id: string;
  image: string;
  label: string;
};

export const travelPlanTourismSpotInputState = atom<TravelPlanTourismSpotInput>({
  key: "travelPlanTourismSpotInputState",
  default: {
    id: "",
    image: "",
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

export const firebaseTokenState = atom<string | null>({
  key: "firebaseTokenState",
  default: null,
  effects: [
    ({ setSelf }) => {
      const user = auth.currentUser;
      if (!user) return setSelf(null);
      user.getIdToken().then((token) => setSelf(token));
    },
  ],
});

export const travelPlanState = atomFamily<TravelPlan | undefined, string>({
  key: "travelPlanState",
  default: undefined,
  effects: (travelPlanId: string): AtomEffect<TravelPlan | undefined>[] => [
    ({ setSelf }) => {
      return subscribeRemoteTravelPlan(travelPlanId, (snapshot: TravelPlan) => {
        setSelf(snapshot);
      });
    },
  ],
});
