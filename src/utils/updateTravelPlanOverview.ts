import { UpdateTravelPlanDto } from "@/@types";
import { client } from "@/lib/aspida";

export const updateTravelPlanOverview = async (collaborateId: string, data: UpdateTravelPlanDto) => {
  const bookmarkList = await client.collaborate._collaborate_id(collaborateId).$put({
    body: data,
  });

  return bookmarkList;
};
