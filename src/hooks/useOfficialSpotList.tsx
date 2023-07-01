import { client } from "@/lib/aspida";
import useAspidaSWR from "@aspida/swr";

export const useOfficialSpotList = () => {
  const { data, error } = useAspidaSWR(client.official_spot, "$get");

  return { data, error };
};
