import { travelPlanState } from "@/atoms";
import { useRecoilValue } from "recoil";

export const useTravelPlan = (travelPlanId: string) => {
  return useRecoilValue(travelPlanState(travelPlanId));
};
