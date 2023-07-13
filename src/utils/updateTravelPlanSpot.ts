import { UpdateTravelPlanSpotDto } from "@/@types";
import { client } from "@/lib/aspida";

export const updateTravelPlanSpot = async (travelPlanId: string, spotId: string, data: UpdateTravelPlanSpotDto) => {
  const bookmarkList = await client.user.travel_plan
    ._travel_plan_id(travelPlanId)
    .spot._travel_plan_spot_id(spotId)
    .$put({
      body: data,
    });

  return bookmarkList;
};
