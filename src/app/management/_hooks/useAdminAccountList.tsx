import useAspidaSWR from "@aspida/swr";
import { managementClient } from "../_aspida/managementAspida";

export const useAdminAccountList = () => {
  const { data, error } = useAspidaSWR(managementClient.management);

  return { data, error };
};
