import { UpdateTravelPlanSpotDto } from "@/@types";
import { firebaseTokenState } from "@/atoms";
import { client } from "@/lib/aspida";
import { useCallback } from "react";
import { useRecoilValue } from "recoil";

// TODO: request for backend
export const usePutTravelPlanSpot = (travelPlanId: string, travelPlanSpotId: string) => {
  const token = useRecoilValue(firebaseTokenState);
  const putTravelPlanSpot = useCallback(
    (body: UpdateTravelPlanSpotDto) => {
      return client.user.travel_plan
        ._travel_plan_id(travelPlanId)
        .spot._travel_plan_spot_id(travelPlanSpotId)
        .$put({
          body: body,
          config: {
            headers: { Authorization: `Bearer ${token}` },
          },
        });
    },
    [token, travelPlanId, travelPlanSpotId]
  );
  return { putTravelPlanSpot };
};

export const useDeleteTravelPlanSpot = (travelPlanId: string, travelPlanSpotId: string) => {
  const token = useRecoilValue(firebaseTokenState);
  const deleteTravelPlanSpot = useCallback(() => {
    return client.user.travel_plan
      ._travel_plan_id(travelPlanId)
      .spot._travel_plan_spot_id(travelPlanSpotId)
      .$delete({
        config: {
          headers: { Authorization: `Bearer ${token}` },
        },
      });
  }, [token, travelPlanId, travelPlanSpotId]);
  return { deleteTravelPlanSpot };
};
