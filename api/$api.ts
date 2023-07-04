import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./management";
import type { Methods as Methods2 } from "./management/_administrator_id@string";
import type { Methods as Methods3 } from "./management/login";
import type { Methods as Methods4 } from "./management/logout";
import type { Methods as Methods5 } from "./management/model_course";
import type { Methods as Methods6 } from "./management/model_course/_model_course_id@string";
import type { Methods as Methods7 } from "./management/model_course/_model_course_id@string/image";
import type { Methods as Methods8 } from "./management/model_course/_model_course_id@string/image/_image_id@string";
import type { Methods as Methods9 } from "./management/model_course/_model_course_id@string/spot";
import type { Methods as Methods10 } from "./management/model_course/_model_course_id@string/spot/_model_course_spot_id@string";
import type { Methods as Methods11 } from "./management/official_spot";
import type { Methods as Methods12 } from "./management/official_spot/_official_spot_id@string";
import type { Methods as Methods13 } from "./management/official_spot/_official_spot_id@string/image";
import type { Methods as Methods14 } from "./management/official_spot/_official_spot_id@string/image/_image_id@string";
import type { Methods as Methods15 } from "./model_course";
import type { Methods as Methods16 } from "./model_course/_model_course_id@string";
import type { Methods as Methods17 } from "./official_spot";
import type { Methods as Methods18 } from "./official_spot/_official_spot_id@string";
import type { Methods as Methods19 } from "./user";
import type { Methods as Methods20 } from "./user/_user_id@string";
import type { Methods as Methods21 } from "./user/model_course_bookmark";
import type { Methods as Methods22 } from "./user/official_spot_bookmark";
import type { Methods as Methods23 } from "./user/private_spot";
import type { Methods as Methods24 } from "./user/private_spot/_private_spot_id@string";
import type { Methods as Methods25 } from "./user/travel_plan";
import type { Methods as Methods26 } from "./user/travel_plan/_travel_plan_id@string";
import type { Methods as Methods27 } from "./user/travel_plan/_travel_plan_id@string/spot";
import type { Methods as Methods28 } from "./user/travel_plan/_travel_plan_id@string/spot/_travel_plan_spot_id@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/management";
  const PATH1 = "/management/login";
  const PATH2 = "/management/logout";
  const PATH3 = "/management/model_course";
  const PATH4 = "/image";
  const PATH5 = "/spot";
  const PATH6 = "/management/official_spot";
  const PATH7 = "/model_course";
  const PATH8 = "/official_spot";
  const PATH9 = "/user";
  const PATH10 = "/user/model_course_bookmark";
  const PATH11 = "/user/official_spot_bookmark";
  const PATH12 = "/user/private_spot";
  const PATH13 = "/user/travel_plan";
  const GET = "GET";
  const POST = "POST";
  const PUT = "PUT";
  const DELETE = "DELETE";

  return {
    management: {
      _administrator_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2["get"]["resBody"], BasicHeaders, Methods2["get"]["status"]>(
              prefix,
              prefix1,
              GET,
              option
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2["get"]["resBody"], BasicHeaders, Methods2["get"]["status"]>(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          put: (option: { body: Methods2["put"]["reqBody"]; config?: T | undefined }) =>
            fetch(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods2["put"]["reqBody"]; config?: T | undefined }) =>
            fetch(prefix, prefix1, PUT, option)
              .send()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) => fetch(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      login: {
        post: (option: { body: Methods3["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<Methods3["post"]["resBody"], BasicHeaders, Methods3["post"]["status"]>(
            prefix,
            PATH1,
            POST,
            option
          ).json(),
        $post: (option: { body: Methods3["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<Methods3["post"]["resBody"], BasicHeaders, Methods3["post"]["status"]>(prefix, PATH1, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
      logout: {
        post: (option: { body: Methods4["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods4["post"]["status"]>(prefix, PATH2, POST, option).send(),
        $post: (option: { body: Methods4["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods4["post"]["status"]>(prefix, PATH2, POST, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH2}`,
      },
      model_course: {
        _model_course_id: (val2: string) => {
          const prefix2 = `${PATH3}/${val2}`;

          return {
            image: {
              _image_id: (val4: string) => {
                const prefix4 = `${prefix2}${PATH4}/${val4}`;

                return {
                  delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods8["delete"]["status"]>(prefix, prefix4, DELETE, option).send(),
                  $delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods8["delete"]["status"]>(prefix, prefix4, DELETE, option)
                      .send()
                      .then((r) => r.body),
                  $path: () => `${prefix}${prefix4}`,
                };
              },
              post: (option: { body: Methods7["post"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods7["post"]["status"]>(
                  prefix,
                  `${prefix2}${PATH4}`,
                  POST,
                  option,
                  "FormData"
                ).send(),
              $post: (option: { body: Methods7["post"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods7["post"]["status"]>(
                  prefix,
                  `${prefix2}${PATH4}`,
                  POST,
                  option,
                  "FormData"
                )
                  .send()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}${PATH4}`,
            },
            spot: {
              _model_course_spot_id: (val4: string) => {
                const prefix4 = `${prefix2}${PATH5}/${val4}`;

                return {
                  put: (option: { body: Methods10["put"]["reqBody"]; config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods10["put"]["status"]>(prefix, prefix4, PUT, option).send(),
                  $put: (option: { body: Methods10["put"]["reqBody"]; config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods10["put"]["status"]>(prefix, prefix4, PUT, option)
                      .send()
                      .then((r) => r.body),
                  delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods10["delete"]["status"]>(prefix, prefix4, DELETE, option).send(),
                  $delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods10["delete"]["status"]>(prefix, prefix4, DELETE, option)
                      .send()
                      .then((r) => r.body),
                  $path: () => `${prefix}${prefix4}`,
                };
              },
              post: (option: { body: Methods9["post"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods9["post"]["status"]>(
                  prefix,
                  `${prefix2}${PATH5}`,
                  POST,
                  option
                ).send(),
              $post: (option: { body: Methods9["post"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods9["post"]["status"]>(prefix, `${prefix2}${PATH5}`, POST, option)
                  .send()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}${PATH5}`,
            },
            put: (option: { body: Methods6["put"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods6["put"]["status"]>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods6["put"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods6["put"]["status"]>(prefix, prefix2, PUT, option)
                .send()
                .then((r) => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods6["delete"]["status"]>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods6["delete"]["status"]>(prefix, prefix2, DELETE, option)
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        post: (option: { body: Methods5["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods5["post"]["status"]>(prefix, PATH3, POST, option).send(),
        $post: (option: { body: Methods5["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods5["post"]["status"]>(prefix, PATH3, POST, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH3}`,
      },
      official_spot: {
        _official_spot_id: (val2: string) => {
          const prefix2 = `${PATH6}/${val2}`;

          return {
            image: {
              _image_id: (val4: string) => {
                const prefix4 = `${prefix2}${PATH4}/${val4}`;

                return {
                  delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods14["delete"]["status"]>(prefix, prefix4, DELETE, option).send(),
                  $delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods14["delete"]["status"]>(prefix, prefix4, DELETE, option)
                      .send()
                      .then((r) => r.body),
                  $path: () => `${prefix}${prefix4}`,
                };
              },
              put: (option: { body: Methods13["put"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods13["put"]["status"]>(
                  prefix,
                  `${prefix2}${PATH4}`,
                  PUT,
                  option,
                  "FormData"
                ).send(),
              $put: (option: { body: Methods13["put"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods13["put"]["status"]>(
                  prefix,
                  `${prefix2}${PATH4}`,
                  PUT,
                  option,
                  "FormData"
                )
                  .send()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}${PATH4}`,
            },
            put: (option: { body: Methods12["put"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods12["put"]["status"]>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods12["put"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods12["put"]["status"]>(prefix, prefix2, PUT, option)
                .send()
                .then((r) => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods12["delete"]["status"]>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods12["delete"]["status"]>(prefix, prefix2, DELETE, option)
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        post: (option: { body: Methods11["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods11["post"]["status"]>(prefix, PATH6, POST, option).send(),
        $post: (option: { body: Methods11["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods11["post"]["status"]>(prefix, PATH6, POST, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH6}`,
      },
      post: (option: { body: Methods1["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1["post"]["status"]>(prefix, PATH0, POST, option).send(),
      $post: (option: { body: Methods1["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1["post"]["status"]>(prefix, PATH0, POST, option)
          .send()
          .then((r) => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1["get"]["resBody"], BasicHeaders, Methods1["get"]["status"]>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1["get"]["resBody"], BasicHeaders, Methods1["get"]["status"]>(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    model_course: {
      _model_course_id: (val1: string) => {
        const prefix1 = `${PATH7}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods16["get"]["resBody"], BasicHeaders, Methods16["get"]["status"]>(
              prefix,
              prefix1,
              GET,
              option
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods16["get"]["resBody"], BasicHeaders, Methods16["get"]["status"]>(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods15["get"]["resBody"], BasicHeaders, Methods15["get"]["status"]>(prefix, PATH7, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods15["get"]["resBody"], BasicHeaders, Methods15["get"]["status"]>(prefix, PATH7, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH7}`,
    },
    official_spot: {
      _official_spot_id: (val1: string) => {
        const prefix1 = `${PATH8}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods18["get"]["resBody"], BasicHeaders, Methods18["get"]["status"]>(
              prefix,
              prefix1,
              GET,
              option
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods18["get"]["resBody"], BasicHeaders, Methods18["get"]["status"]>(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods17["get"]["resBody"], BasicHeaders, Methods17["get"]["status"]>(prefix, PATH8, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods17["get"]["resBody"], BasicHeaders, Methods17["get"]["status"]>(prefix, PATH8, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH8}`,
    },
    user: {
      _user_id: (val1: string) => {
        const prefix1 = `${PATH9}/${val1}`;

        return {
          /**
           * @returns 該当する主キーを持つユーザー情報
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods20["get"]["resBody"], BasicHeaders, Methods20["get"]["status"]>(
              prefix,
              prefix1,
              GET,
              option
            ).json(),
          /**
           * @returns 該当する主キーを持つユーザー情報
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods20["get"]["resBody"], BasicHeaders, Methods20["get"]["status"]>(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          put: (option: { body: Methods20["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods20["put"]["status"]>(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods20["put"]["reqBody"]; config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods20["put"]["status"]>(prefix, prefix1, PUT, option)
              .send()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods20["delete"]["status"]>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods20["delete"]["status"]>(prefix, prefix1, DELETE, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      model_course_bookmark: {
        post: (option: { body: Methods21["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods21["post"]["status"]>(prefix, PATH10, POST, option).send(),
        $post: (option: { body: Methods21["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods21["post"]["status"]>(prefix, PATH10, POST, option)
            .send()
            .then((r) => r.body),
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods21["get"]["resBody"], BasicHeaders, Methods21["get"]["status"]>(
            prefix,
            PATH10,
            GET,
            option
          ).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods21["get"]["resBody"], BasicHeaders, Methods21["get"]["status"]>(prefix, PATH10, GET, option)
            .json()
            .then((r) => r.body),
        put: (option: { body: Methods21["put"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods21["put"]["status"]>(prefix, PATH10, PUT, option).send(),
        $put: (option: { body: Methods21["put"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods21["put"]["status"]>(prefix, PATH10, PUT, option)
            .send()
            .then((r) => r.body),
        delete: (option: { body: Methods21["delete"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods21["delete"]["status"]>(prefix, PATH10, DELETE, option).send(),
        $delete: (option: { body: Methods21["delete"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods21["delete"]["status"]>(prefix, PATH10, DELETE, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH10}`,
      },
      official_spot_bookmark: {
        post: (option: { body: Methods22["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods22["post"]["status"]>(prefix, PATH11, POST, option).send(),
        $post: (option: { body: Methods22["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods22["post"]["status"]>(prefix, PATH11, POST, option)
            .send()
            .then((r) => r.body),
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods22["get"]["resBody"], BasicHeaders, Methods22["get"]["status"]>(
            prefix,
            PATH11,
            GET,
            option
          ).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods22["get"]["resBody"], BasicHeaders, Methods22["get"]["status"]>(prefix, PATH11, GET, option)
            .json()
            .then((r) => r.body),
        put: (option: { body: Methods22["put"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods22["put"]["status"]>(prefix, PATH11, PUT, option).send(),
        $put: (option: { body: Methods22["put"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods22["put"]["status"]>(prefix, PATH11, PUT, option)
            .send()
            .then((r) => r.body),
        delete: (option: { body: Methods22["delete"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods22["delete"]["status"]>(prefix, PATH11, DELETE, option).send(),
        $delete: (option: { body: Methods22["delete"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods22["delete"]["status"]>(prefix, PATH11, DELETE, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH11}`,
      },
      private_spot: {
        _private_spot_id: (val2: string) => {
          const prefix2 = `${PATH12}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods24["get"]["resBody"], BasicHeaders, Methods24["get"]["status"]>(
                prefix,
                prefix2,
                GET,
                option
              ).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods24["get"]["resBody"], BasicHeaders, Methods24["get"]["status"]>(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            put: (option: { body: Methods24["put"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods24["put"]["status"]>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods24["put"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods24["put"]["status"]>(prefix, prefix2, PUT, option)
                .send()
                .then((r) => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods24["delete"]["status"]>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods24["delete"]["status"]>(prefix, prefix2, DELETE, option)
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        post: (option: { body: Methods23["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods23["post"]["status"]>(prefix, PATH12, POST, option).send(),
        $post: (option: { body: Methods23["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods23["post"]["status"]>(prefix, PATH12, POST, option)
            .send()
            .then((r) => r.body),
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods23["get"]["resBody"], BasicHeaders, Methods23["get"]["status"]>(
            prefix,
            PATH12,
            GET,
            option
          ).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods23["get"]["resBody"], BasicHeaders, Methods23["get"]["status"]>(prefix, PATH12, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH12}`,
      },
      travel_plan: {
        _travel_plan_id: (val2: string) => {
          const prefix2 = `${PATH13}/${val2}`;

          return {
            spot: {
              _travel_plan_spot_id: (val4: string) => {
                const prefix4 = `${prefix2}${PATH5}/${val4}`;

                return {
                  put: (option: { body: Methods28["put"]["reqBody"]; config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods28["put"]["status"]>(prefix, prefix4, PUT, option).send(),
                  $put: (option: { body: Methods28["put"]["reqBody"]; config?: T | undefined }) =>
                    fetch<void, BasicHeaders, Methods28["put"]["status"]>(prefix, prefix4, PUT, option)
                      .send()
                      .then((r) => r.body),
                  delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods28["delete"]["status"]>(prefix, prefix4, DELETE, option).send(),
                  $delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods28["delete"]["status"]>(prefix, prefix4, DELETE, option)
                      .send()
                      .then((r) => r.body),
                  $path: () => `${prefix}${prefix4}`,
                };
              },
              post: (option: { body: Methods27["post"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods27["post"]["status"]>(
                  prefix,
                  `${prefix2}${PATH5}`,
                  POST,
                  option
                ).send(),
              $post: (option: { body: Methods27["post"]["reqBody"]; config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods27["post"]["status"]>(prefix, `${prefix2}${PATH5}`, POST, option)
                  .send()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}${PATH5}`,
            },
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods26["get"]["resBody"], BasicHeaders, Methods26["get"]["status"]>(
                prefix,
                prefix2,
                GET,
                option
              ).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods26["get"]["resBody"], BasicHeaders, Methods26["get"]["status"]>(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            put: (option: { body: Methods26["put"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods26["put"]["status"]>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods26["put"]["reqBody"]; config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods26["put"]["status"]>(prefix, prefix2, PUT, option)
                .send()
                .then((r) => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods26["delete"]["status"]>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods26["delete"]["status"]>(prefix, prefix2, DELETE, option)
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        post: (option: { body: Methods25["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods25["post"]["status"]>(prefix, PATH13, POST, option).send(),
        $post: (option: { body: Methods25["post"]["reqBody"]; config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods25["post"]["status"]>(prefix, PATH13, POST, option)
            .send()
            .then((r) => r.body),
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods25["get"]["resBody"], BasicHeaders, Methods25["get"]["status"]>(
            prefix,
            PATH13,
            GET,
            option
          ).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods25["get"]["resBody"], BasicHeaders, Methods25["get"]["status"]>(prefix, PATH13, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH13}`,
      },
      post: (option: { body: Methods19["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods19["post"]["status"]>(prefix, PATH9, POST, option).send(),
      $post: (option: { body: Methods19["post"]["reqBody"]; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods19["post"]["status"]>(prefix, PATH9, POST, option)
          .send()
          .then((r) => r.body),
      /**
       * @returns 保存されている全てのユーザー情報
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods19["get"]["resBody"], BasicHeaders, Methods19["get"]["status"]>(prefix, PATH9, GET, option).json(),
      /**
       * @returns 保存されている全てのユーザー情報
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods19["get"]["resBody"], BasicHeaders, Methods19["get"]["status"]>(prefix, PATH9, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH9}`,
    },
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0["get"]["status"]>(prefix, "", GET, option).send(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0["get"]["status"]>(prefix, "", GET, option)
        .send()
        .then((r) => r.body),
    $path: () => `${prefix}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
