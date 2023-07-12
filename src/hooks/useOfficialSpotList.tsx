import { SpotList } from "@/atoms/SpotAtoms";
import { client } from "@/lib/aspida";
import useAspidaSWR from "@aspida/swr";
import { useRecoilState } from "recoil";

export const useOfficialSpotList = () => {
  const { data, error } = useAspidaSWR(client.official_spot, "$get");
  const [spotList, setSpotList] = useRecoilState(SpotList);

  if (data && !spotList) setSpotList(data);

  return { data, error };
};
