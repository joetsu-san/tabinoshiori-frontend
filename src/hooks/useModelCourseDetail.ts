import { client } from "@/lib/aspida";
import useAspidaSWR from "@aspida/swr";

export const useModelCourseDetail = ({ id }: { id: string }) => {
  const { data, error } = useAspidaSWR(client.model_course._model_course_id(id), "$get");

  return { data, error };
};
