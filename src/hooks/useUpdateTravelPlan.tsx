import { UpdateTravelPlanDto } from "@/@types";
import { client } from "@/lib/aspida";
import { firebaseTokenState } from "@/atoms";
import { useRecoilValue } from "recoil";

export const useUpdateTravelPlan = () => {
  const token = useRecoilValue(firebaseTokenState);
  const updateTravelPlan = (id: string, body: UpdateTravelPlanDto) => {
    try {
      return client.user.travel_plan._travel_plan_id(id).$put({
        body: body,
        config: { headers: { Authorization: `Bearer ${token}` } },
      });
    } catch {
      return null;
    }
  };
  return { updateTravelPlan };
};
