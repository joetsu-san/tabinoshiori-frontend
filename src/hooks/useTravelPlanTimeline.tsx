import { travelPlanState } from "@/atoms";
import { TravelPlan, TravelPlanSpot } from "@/utils/subscribeRemoteTravelPlan";
import { useRecoilValue } from "recoil";

export type UseTravelPlanTimelineResponse = { travelPlanSpots: TravelPlanSpot[] };

export const useTravelPlanTimeline = (travelPlanId: string) => {
  return useRecoilValue(travelPlanState(travelPlanId));
};
