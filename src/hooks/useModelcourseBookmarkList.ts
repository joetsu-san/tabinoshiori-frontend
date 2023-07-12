import { firebaseTokenState } from "@/atoms";
import { client } from "@/lib/aspida";
import useAspidaSWR from "@aspida/swr";
import { useRecoilValue } from "recoil";

export const useModelcourseBookmarkList = () => {
  const token = useRecoilValue(firebaseTokenState);
  return useAspidaSWR(client.user.model_course_bookmark, "$get", {
    config: {
      headers: { Authorization: `Bearer ${token}` },
    },
    enabled: !!token,
  });
};
