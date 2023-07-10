import { firebaseTokenState } from "@/atoms";
import { client } from "@/lib/aspida";
import useAspidaSWR from "@aspida/swr";
import { useRecoilValue } from "recoil";

export const useUserData = () => {
  const token = useRecoilValue(firebaseTokenState);
  const { data, error } = useAspidaSWR(client.user, "$get", {
    config: {
      headers: { Authorization: `Bearer ${token}` },
    },
    enabled: !!token,
  });
  return { data, error };
};
