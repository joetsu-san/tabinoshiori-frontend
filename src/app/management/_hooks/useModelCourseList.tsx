import useAspidaSWR from "@aspida/swr";
import { managementClient } from "../_aspida/managementAspida";

export const useModelCourseList = () => {
  const { data, error } = useAspidaSWR(managementClient.model_course);

  return { data, error };
};
