import { firebaseTokenState } from "@/atoms";
import { client } from "@/lib/aspida";
import useAspidaSWR from "@aspida/swr";
import { useRecoilValue } from "recoil";

export const useTourismspotBookmarkList = () => {
  const token = useRecoilValue(firebaseTokenState);
  const { data, error } = useAspidaSWR(client.user.official_spot_bookmark, "$get", {
    config: {
      headers: { Authorization: `Bearer ${token}` },
    },
    enabled: !!token,
  });

  if (!data) return { data: [], error };
  return { data, error };
};
