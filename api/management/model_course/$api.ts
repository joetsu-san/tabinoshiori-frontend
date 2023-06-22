import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./_model_course_id@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/management/model_course";
  const POST = "POST";
  const PUT = "PUT";
  const DELETE = "DELETE";

  return {
    _model_course_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        put: (option: { body: Methods1["put"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1["put"]["status"]>(prefix, prefix0, PUT, option).send(),
        $put: (option: { body: Methods1["put"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1["put"]["status"]>(prefix, prefix0, PUT, option)
            .send()
            .then((r) => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1["delete"]["status"]>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1["delete"]["status"]>(prefix, prefix0, DELETE, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0["post"]["status"]>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0["post"]["status"]>(prefix, PATH0, POST, option)
        .send()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
