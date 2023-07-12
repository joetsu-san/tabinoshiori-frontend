import { client } from "@/lib/aspida";

export const createModelcourseBookmark = async (modelcourseId: string, token: string) => {
  const res = await client.user.model_course_bookmark.$post({
    body: {
      modelCourseId: modelcourseId,
      sortIndex: 0,
    },
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  return res;
};
