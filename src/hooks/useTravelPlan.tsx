import { firebaseTokenState } from "@/atoms";
import { client } from "@/lib/aspida";
import useAspidaSWR from "@aspida/swr";
import { useRecoilValue } from "recoil";

export const useTravelPlan = (id: string) => {
  const token = useRecoilValue(firebaseTokenState);
  const { data, error } = useAspidaSWR(client.user.travel_plan._travel_plan_id(id), "$get", {
    config: {
      headers: { Authorization: `Bearer ${token}` },
    },
    enabled: !!token,
  });

  return { data, error };
};
