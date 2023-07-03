import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./_administrator_id@string";
import type { Methods as Methods2 } from "./login";
import type { Methods as Methods3 } from "./logout";
import type { Methods as Methods4 } from "./model_course";
import type { Methods as Methods5 } from "./model_course/_model_course_id@string";
import type { Methods as Methods6 } from "./model_course/_model_course_id@string/image";
import type { Methods as Methods7 } from "./model_course/_model_course_id@string/image/_image_id@string";
import type { Methods as Methods8 } from "./model_course/_model_course_id@string/spot";
import type { Methods as Methods9 } from "./model_course/_model_course_id@string/spot/_model_course_spot_id@string";
import type { Methods as Methods10 } from "./official_spot";
import type { Methods as Methods11 } from "./official_spot/_official_spot_id@string";
import type { Methods as Methods12 } from "./official_spot/_official_spot_id@string/image";
import type { Methods as Methods13 } from "./official_spot/_official_spot_id@string/image/_image_id@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/management";
  const PATH1 = "/management/login";
  const PATH2 = "/management/logout";
  const PATH3 = "/management/model_course";
  const PATH4 = "/image";
  const PATH5 = "/spot";
  const PATH6 = "/management/official_spot";
  const GET = "GET";
  const POST = "POST";
  const PUT = "PUT";
  const DELETE = "DELETE";

  return {
    _administrator_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1["get"]["resBody"], BasicHeaders, Methods1["get"]["status"]>(
            prefix,
            prefix0,
            GET,
            option
          ).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1["get"]["resBody"], BasicHeaders, Methods1["get"]["status"]>(prefix, prefix0, GET, option)
            .json()
            .then((r) => r.body),
        put: (option: { body: Methods1["put"]["reqBody"]; config?: T | undefined }) =>
          fetch(prefix, prefix0, PUT, option).send(),
        $put: (option: { body: Methods1["put"]["reqBody"]; config?: T | undefined }) =>
          fetch(prefix, prefix0, PUT, option)
            .send()
            .then((r) => r.body),
        delete: (option?: { config?: T | undefined } | undefined) => fetch(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, DELETE, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    login: {
      post: (option: { body: Methods2["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<Methods2["post"]["resBody"], BasicHeaders, Methods2["post"]["status"]>(
          prefix,
          PATH1,
          POST,
          option
        ).json(),
      $post: (option: { body: Methods2["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<Methods2["post"]["resBody"], BasicHeaders, Methods2["post"]["status"]>(prefix, PATH1, POST, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    logout: {
      post: (option: { body: Methods3["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3["post"]["status"]>(prefix, PATH2, POST, option).send(),
      $post: (option: { body: Methods3["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3["post"]["status"]>(prefix, PATH2, POST, option)
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    model_course: {
      _model_course_id: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`;

        return {
          image: {
            _image_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH4}/${val3}`;

              return {
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods7["delete"]["status"]>(prefix, prefix3, DELETE, option).send(),
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods7["delete"]["status"]>(prefix, prefix3, DELETE, option)
                    .send()
                    .then((r) => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
            post: (option: { body: Methods6["post"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods6["post"]["status"]>(
                prefix,
                `${prefix1}${PATH4}`,
                POST,
                option,
                "FormData"
              ).send(),
            $post: (option: { body: Methods6["post"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods6["post"]["status"]>(
                prefix,
                `${prefix1}${PATH4}`,
                POST,
                option,
                "FormData"
              )
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`,
          },
          spot: {
            _model_course_spot_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH5}/${val3}`;

              return {
                put: (option: { body: Methods9["put"]["reqBody"]; config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods9["put"]["status"]>(prefix, prefix3, PUT, option).send(),
                $put: (option: { body: Methods9["put"]["reqBody"]; config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods9["put"]["status"]>(prefix, prefix3, PUT, option)
                    .send()
                    .then((r) => r.body),
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods9["delete"]["status"]>(prefix, prefix3, DELETE, option).send(),
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods9["delete"]["status"]>(prefix, prefix3, DELETE, option)
                    .send()
                    .then((r) => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
            post: (option: { body: Methods8["post"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods8["post"]["status"]>(prefix, `${prefix1}${PATH5}`, POST, option).send(),
            $post: (option: { body: Methods8["post"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods8["post"]["status"]>(prefix, `${prefix1}${PATH5}`, POST, option)
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH5}`,
          },
          put: (option: { body: Methods5["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods5["put"]["status"]>(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods5["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods5["put"]["status"]>(prefix, prefix1, PUT, option)
              .send()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5["delete"]["status"]>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5["delete"]["status"]>(prefix, prefix1, DELETE, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      post: (option: { body: Methods4["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4["post"]["status"]>(prefix, PATH3, POST, option).send(),
      $post: (option: { body: Methods4["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4["post"]["status"]>(prefix, PATH3, POST, option)
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    official_spot: {
      _official_spot_id: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`;

        return {
          image: {
            _image_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH4}/${val3}`;

              return {
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods13["delete"]["status"]>(prefix, prefix3, DELETE, option).send(),
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods13["delete"]["status"]>(prefix, prefix3, DELETE, option)
                    .send()
                    .then((r) => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
            put: (option: { body: Methods12["put"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods12["put"]["status"]>(
                prefix,
                `${prefix1}${PATH4}`,
                PUT,
                option,
                "FormData"
              ).send(),
            $put: (option: { body: Methods12["put"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods12["put"]["status"]>(
                prefix,
                `${prefix1}${PATH4}`,
                PUT,
                option,
                "FormData"
              )
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`,
          },
          put: (option: { body: Methods11["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods11["put"]["status"]>(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods11["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods11["put"]["status"]>(prefix, prefix1, PUT, option)
              .send()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods11["delete"]["status"]>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods11["delete"]["status"]>(prefix, prefix1, DELETE, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      post: (option: { body: Methods10["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods10["post"]["status"]>(prefix, PATH6, POST, option).send(),
      $post: (option: { body: Methods10["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods10["post"]["status"]>(prefix, PATH6, POST, option)
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH6}`,
    },
    post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0["post"]["status"]>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0["post"]["status"]>(prefix, PATH0, POST, option)
        .send()
        .then((r) => r.body),
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0["get"]["resBody"], BasicHeaders, Methods0["get"]["status"]>(prefix, PATH0, GET, option).json(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0["get"]["resBody"], BasicHeaders, Methods0["get"]["status"]>(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
