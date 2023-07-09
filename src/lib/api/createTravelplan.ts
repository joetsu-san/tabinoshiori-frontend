import { client } from "../aspida";

export const createTravelplan = async (token: string) => {
  const travelPlan = await client.user.travel_plan.$post({
    body: {
      title: "タイトル",
      description: "説明",
      visitedAt: undefined,
      travelPlanSpots: [],
    },
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
};
