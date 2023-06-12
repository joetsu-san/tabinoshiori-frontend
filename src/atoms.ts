import { atom } from "recoil";
import { TravelPlanSpot } from "../api/@types";

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
