import { client } from "@/lib/aspida";
import { firebaseTokenState } from "@/atoms";
import { useRecoilValue } from "recoil";
import { CreateTravelPlanSpotDto } from "@/@types";

export const useCreateTravelPlanSpot = () => {
  const token = useRecoilValue(firebaseTokenState);
  const createTravelPlanSpot = (id: string, body: CreateTravelPlanSpotDto) => {
    try {
      return client.user.travel_plan._travel_plan_id(id).spot.$post({
        body: body,
        config: { headers: { Authorization: `Bearer ${token}` } },
      });
    } catch {
      return null;
    }
  };
  return { createTravelPlanSpot };
};
