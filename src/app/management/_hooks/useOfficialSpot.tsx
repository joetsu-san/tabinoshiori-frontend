import useAspidaSWR from "@aspida/swr";
import { managementClient } from "../_aspida/managementAspida";

export const useOfficialSpot = (id: string) => {
  const { data, error } = useAspidaSWR(managementClient.official_spot._official_spot_id(id));

  return { data, error };
};
