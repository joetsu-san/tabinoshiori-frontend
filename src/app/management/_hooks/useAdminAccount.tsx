import useAspidaSWR from "@aspida/swr";
import { managementClient } from "../_aspida/managementAspida";

export const useAdminAccount = (id: string) => {
  const { data, error } = useAspidaSWR(managementClient.management._administrator_id(id));

  return { data, error };
};
