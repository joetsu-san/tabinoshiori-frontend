import { UpdateTravelPlanDto } from "@/@types";
import { client } from "@/lib/aspida";

export const updateTravelPlanOverview = async (travelPlanId: string, data: UpdateTravelPlanDto) => {
  const bookmarkList = await client.user.travel_plan._travel_plan_id(travelPlanId).$put({
    body: data,
  });

  return bookmarkList;
};
