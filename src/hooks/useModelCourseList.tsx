import { client } from "@/lib/aspida";
import useAspidaSWR from "@aspida/swr";

export const useModelCourseList = () => {
  const { data, error } = useAspidaSWR(client.model_course, "$get");

  return { data, error };
};
