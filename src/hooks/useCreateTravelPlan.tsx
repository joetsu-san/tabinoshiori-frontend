import { client } from "@/lib/aspida";
import { firebaseTokenState } from "@/atoms";
import { useRecoilValue } from "recoil";

export const useCreateTravelPlan = () => {
  const token = useRecoilValue(firebaseTokenState);
  const createTravelPlan = () => {
    console.log("token", token);
    try {
      return client.user.travel_plan.$post({
        body: {
          title: "旅のしおりのタイトル",
          description: "旅のしおりの説明",
        },
        config: { headers: { Authorization: `Bearer ${token}` } },
      });
    } catch {
      return null;
    }
  };
  return { createTravelPlan };
};
