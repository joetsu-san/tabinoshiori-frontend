import { firebaseTokenState } from "@/atoms";
import { client } from "@/lib/aspida";
import useAspidaSWR from "@aspida/swr";
import { useRecoilValue } from "recoil";

export const useTravelPlanList = () => {
  const token = useRecoilValue(firebaseTokenState);
  const { data, error } = useAspidaSWR(client.user.travel_plan, "$get", {
    config: {
      headers: { Authorization: `Bearer ${token}` },
    },
    enabled: !!token,
  });

  return { data, error };
};
