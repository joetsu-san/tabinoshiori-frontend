import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./_model_course_id@string";
import type { Methods as Methods2 } from "./_model_course_id@string/image";
import type { Methods as Methods3 } from "./_model_course_id@string/image/_image_id@string";
import type { Methods as Methods4 } from "./_model_course_id@string/spot";
import type { Methods as Methods5 } from "./_model_course_id@string/spot/_model_course_spot_id@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/management/model_course";
  const PATH1 = "/image";
  const PATH2 = "/spot";
  const POST = "POST";
  const PUT = "PUT";
  const DELETE = "DELETE";

  return {
    _model_course_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        image: {
          _image_id: (val2: string) => {
            const prefix2 = `${prefix0}${PATH1}/${val2}`;

            return {
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods3["delete"]["status"]>(prefix, prefix2, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods3["delete"]["status"]>(prefix, prefix2, DELETE, option)
                  .send()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}`,
            };
          },
          post: (option: { body: Methods2["post"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2["post"]["status"]>(
              prefix,
              `${prefix0}${PATH1}`,
              POST,
              option,
              "FormData"
            ).send(),
          $post: (option: { body: Methods2["post"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2["post"]["status"]>(
              prefix,
              `${prefix0}${PATH1}`,
              POST,
              option,
              "FormData"
            )
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
        },
        spot: {
          _model_course_spot_id: (val2: string) => {
            const prefix2 = `${prefix0}${PATH2}/${val2}`;

            return {
              put: (option: { body: Methods5["put"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods5["put"]["status"]>(prefix, prefix2, PUT, option).send(),
              $put: (option: { body: Methods5["put"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods5["put"]["status"]>(prefix, prefix2, PUT, option)
                  .send()
                  .then((r) => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods5["delete"]["status"]>(prefix, prefix2, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods5["delete"]["status"]>(prefix, prefix2, DELETE, option)
                  .send()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}`,
            };
          },
          post: (option: { body: Methods4["post"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods4["post"]["status"]>(prefix, `${prefix0}${PATH2}`, POST, option).send(),
          $post: (option: { body: Methods4["post"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods4["post"]["status"]>(prefix, `${prefix0}${PATH2}`, POST, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
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
