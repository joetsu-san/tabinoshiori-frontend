import useAspidaSWR from "@aspida/swr";
import { managementClient } from "../_aspida/managementAspida";

export const useOfficialSpotList = () => {
  const { data, error } = useAspidaSWR(managementClient.official_spot);

  return { data, error };
};
