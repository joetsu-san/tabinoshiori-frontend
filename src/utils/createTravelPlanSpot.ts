import { CreateTravelPlanSpotDto } from "@/@types";
import { client } from "@/lib/aspida";

export const createTravelPlanSpot = async (travelPlanId: string, spotId: string, data: CreateTravelPlanSpotDto) => {
  const bookmarkList = await client.user.travel_plan._travel_plan_id(travelPlanId).spot.$post({
    body: data,
  });

  return bookmarkList;
};
