import useAspidaSWR from "@aspida/swr";
import { managementClient } from "../_aspida/managementAspida";

export const useModelCourse = (id: string) => {
  const { data, error } = useAspidaSWR(managementClient.model_course._model_course_id(id));

  return { data, error };
};
