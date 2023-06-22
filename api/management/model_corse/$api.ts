import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from "./_model_course_id/image/_image_id@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/management/model_corse";
  const PATH1 = "/image";
  const PUT = "PUT";
  const DELETE = "DELETE";

  return {
    _model_course_id: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        image: {
          _image_id: (val2: string) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`;

            return {
              put: (option: { body: Methods0["put"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods0["put"]["status"]>(prefix, prefix2, PUT, option, "FormData").send(),
              $put: (option: { body: Methods0["put"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods0["put"]["status"]>(prefix, prefix2, PUT, option, "FormData")
                  .send()
                  .then((r) => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods0["delete"]["status"]>(prefix, prefix2, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods0["delete"]["status"]>(prefix, prefix2, DELETE, option)
                  .send()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}`,
            };
          },
        },
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
