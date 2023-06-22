import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./_official_spot_id@string";
import type { Methods as Methods2 } from "./_official_spot_id@string/image";
import type { Methods as Methods3 } from "./_official_spot_id@string/image/_image_id@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/management/official_spot";
  const PATH1 = "/image";
  const POST = "POST";
  const PUT = "PUT";
  const DELETE = "DELETE";

  return {
    _official_spot_id: (val0: string) => {
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
          put: (option: { body: Methods2["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2["put"]["status"]>(
              prefix,
              `${prefix0}${PATH1}`,
              PUT,
              option,
              "FormData"
            ).send(),
          $put: (option: { body: Methods2["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2["put"]["status"]>(prefix, `${prefix0}${PATH1}`, PUT, option, "FormData")
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`,
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
