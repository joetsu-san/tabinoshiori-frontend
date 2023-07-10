import { client } from "@/lib/aspida";
import useAspidaSWR from "@aspida/swr";

export const useOfficialSpot = (id: string) => {
  const { data, error } = useAspidaSWR(client.official_spot._official_spot_id(id), "$get");

  return { data, error };
};
