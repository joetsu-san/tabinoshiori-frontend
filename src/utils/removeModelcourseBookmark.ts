import { client } from "@/lib/aspida";

export const removeModelcourseBookmark = async (modelcourseId: string, token: string) => {
  const res = await client.user.model_course_bookmark.$delete({
    body: {
      modelCourseId: modelcourseId,
    },
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  return res;
};
