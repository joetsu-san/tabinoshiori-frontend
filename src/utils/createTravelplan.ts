import { client } from "@/lib/aspida";

export const createTravelplan = async (token: string) => {
  const travelPlan = await client.user.travel_plan.$post({
    body: {
      title: "タイトル",
      description: "説明",
    },
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  return travelPlan;
};
