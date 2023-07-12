import { CreateTravelPlanSpotDto } from "@/@types";
import { client } from "@/lib/aspida";

export const createTravelPlanSpot = async (collaborateId: string, data: CreateTravelPlanSpotDto) => {
  const bookmarkList = await client.collaborate._collaborate_id(collaborateId).travel_plan_spot.$post({
    body: data,
  });

  return bookmarkList;
};
