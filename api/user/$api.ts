import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./_user_id@string";
import type { Methods as Methods2 } from "./login";
import type { Methods as Methods3 } from "./model_course_bookmark";
import type { Methods as Methods4 } from "./official_spot_bookmark";
import type { Methods as Methods5 } from "./private_spot";
import type { Methods as Methods6 } from "./private_spot/_private_spot_id@string";
import type { Methods as Methods7 } from "./travel_plan";
import type { Methods as Methods8 } from "./travel_plan/_travel_plan_id@string";
import type { Methods as Methods9 } from "./travel_plan/_travel_plan_id@string/spot";
import type { Methods as Methods10 } from "./travel_plan/_travel_plan_id@string/spot/_travel_plan_spot_id@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/user";
  const PATH1 = "/user/login";
  const PATH2 = "/user/model_course_bookmark";
  const PATH3 = "/user/official_spot_bookmark";
  const PATH4 = "/user/private_spot";
  const PATH5 = "/user/travel_plan";
  const PATH6 = "/spot";
  const GET = "GET";
  const POST = "POST";
  const PUT = "PUT";
  const DELETE = "DELETE";

  return {
    _user_id: (val0: string) => {
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
    login: {
      post: (option: { body: Methods2["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2["post"]["status"]>(prefix, PATH1, POST, option).send(),
      $post: (option: { body: Methods2["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2["post"]["status"]>(prefix, PATH1, POST, option)
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    model_course_bookmark: {
      post: (option: { body: Methods3["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3["post"]["status"]>(prefix, PATH2, POST, option).send(),
      $post: (option: { body: Methods3["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3["post"]["status"]>(prefix, PATH2, POST, option)
          .send()
          .then((r) => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3["get"]["resBody"], BasicHeaders, Methods3["get"]["status"]>(prefix, PATH2, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3["get"]["resBody"], BasicHeaders, Methods3["get"]["status"]>(prefix, PATH2, GET, option)
          .json()
          .then((r) => r.body),
      put: (option: { body: Methods3["put"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3["put"]["status"]>(prefix, PATH2, PUT, option).send(),
      $put: (option: { body: Methods3["put"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3["put"]["status"]>(prefix, PATH2, PUT, option)
          .send()
          .then((r) => r.body),
      delete: (option: { body: Methods3["delete"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3["delete"]["status"]>(prefix, PATH2, DELETE, option).send(),
      $delete: (option: { body: Methods3["delete"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3["delete"]["status"]>(prefix, PATH2, DELETE, option)
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    official_spot_bookmark: {
      post: (option: { body: Methods4["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4["post"]["status"]>(prefix, PATH3, POST, option).send(),
      $post: (option: { body: Methods4["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4["post"]["status"]>(prefix, PATH3, POST, option)
          .send()
          .then((r) => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods4["get"]["resBody"], BasicHeaders, Methods4["get"]["status"]>(prefix, PATH3, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods4["get"]["resBody"], BasicHeaders, Methods4["get"]["status"]>(prefix, PATH3, GET, option)
          .json()
          .then((r) => r.body),
      put: (option: { body: Methods4["put"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4["put"]["status"]>(prefix, PATH3, PUT, option).send(),
      $put: (option: { body: Methods4["put"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4["put"]["status"]>(prefix, PATH3, PUT, option)
          .send()
          .then((r) => r.body),
      delete: (option: { body: Methods4["delete"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4["delete"]["status"]>(prefix, PATH3, DELETE, option).send(),
      $delete: (option: { body: Methods4["delete"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4["delete"]["status"]>(prefix, PATH3, DELETE, option)
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    private_spot: {
      _private_spot_id: (val1: string) => {
        const prefix1 = `${PATH4}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods6["get"]["resBody"], BasicHeaders, Methods6["get"]["status"]>(
              prefix,
              prefix1,
              GET,
              option
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods6["get"]["resBody"], BasicHeaders, Methods6["get"]["status"]>(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          put: (option: { body: Methods6["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods6["put"]["status"]>(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods6["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods6["put"]["status"]>(prefix, prefix1, PUT, option)
              .send()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6["delete"]["status"]>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods6["delete"]["status"]>(prefix, prefix1, DELETE, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      post: (option: { body: Methods5["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods5["post"]["status"]>(prefix, PATH4, POST, option).send(),
      $post: (option: { body: Methods5["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods5["post"]["status"]>(prefix, PATH4, POST, option)
          .send()
          .then((r) => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods5["get"]["resBody"], BasicHeaders, Methods5["get"]["status"]>(prefix, PATH4, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods5["get"]["resBody"], BasicHeaders, Methods5["get"]["status"]>(prefix, PATH4, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    travel_plan: {
      _travel_plan_id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          spot: {
            _travel_plan_spot_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH6}/${val3}`;

              return {
                put: (option: { body: Methods10["put"]["reqBody"]; config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods10["put"]["status"]>(prefix, prefix3, PUT, option).send(),
                $put: (option: { body: Methods10["put"]["reqBody"]; config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods10["put"]["status"]>(prefix, prefix3, PUT, option)
                    .send()
                    .then((r) => r.body),
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods10["delete"]["status"]>(prefix, prefix3, DELETE, option).send(),
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods10["delete"]["status"]>(prefix, prefix3, DELETE, option)
                    .send()
                    .then((r) => r.body),
                $path: () => `${prefix}${prefix3}`,
              };
            },
            post: (option: { body: Methods9["post"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods9["post"]["status"]>(prefix, `${prefix1}${PATH6}`, POST, option).send(),
            $post: (option: { body: Methods9["post"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods9["post"]["status"]>(prefix, `${prefix1}${PATH6}`, POST, option)
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH6}`,
          },
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8["get"]["resBody"], BasicHeaders, Methods8["get"]["status"]>(
              prefix,
              prefix1,
              GET,
              option
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods8["get"]["resBody"], BasicHeaders, Methods8["get"]["status"]>(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          put: (option: { body: Methods8["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods8["put"]["status"]>(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods8["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods8["put"]["status"]>(prefix, prefix1, PUT, option)
              .send()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8["delete"]["status"]>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8["delete"]["status"]>(prefix, prefix1, DELETE, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      post: (option: { body: Methods7["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods7["post"]["status"]>(prefix, PATH5, POST, option).send(),
      $post: (option: { body: Methods7["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods7["post"]["status"]>(prefix, PATH5, POST, option)
          .send()
          .then((r) => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods7["get"]["resBody"], BasicHeaders, Methods7["get"]["status"]>(prefix, PATH5, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods7["get"]["resBody"], BasicHeaders, Methods7["get"]["status"]>(prefix, PATH5, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH5}`,
    },
    post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0["post"]["status"]>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0["post"]["status"]>(prefix, PATH0, POST, option)
        .send()
        .then((r) => r.body),
    /**
     * @returns 保存されている全てのユーザー情報
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0["get"]["resBody"], BasicHeaders, Methods0["get"]["status"]>(prefix, PATH0, GET, option).json(),
    /**
     * @returns 保存されている全てのユーザー情報
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0["get"]["resBody"], BasicHeaders, Methods0["get"]["status"]>(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;