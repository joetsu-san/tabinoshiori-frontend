import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './management'
import type { Methods as Methods2 } from './management/_id@string'
import type { Methods as Methods3 } from './management/model_course'
import type { Methods as Methods4 } from './management/model_course/_id@string'
import type { Methods as Methods5 } from './management/official_spot'
import type { Methods as Methods6 } from './management/official_spot/_id@string'
import type { Methods as Methods7 } from './management/official_spot/_official_spot_id@string/image'
import type { Methods as Methods8 } from './management/official_spot/_official_spot_id@string/image/_image_id@string'
import type { Methods as Methods9 } from './model_course'
import type { Methods as Methods10 } from './modelcourse/_id@string'
import type { Methods as Methods11 } from './official_spot'
import type { Methods as Methods12 } from './official_spot/_id@string'
import type { Methods as Methods13 } from './user'
import type { Methods as Methods14 } from './user/_id@string'
import type { Methods as Methods15 } from './user/model_course_bookmark'
import type { Methods as Methods16 } from './user/official_spot_bookmark'
import type { Methods as Methods17 } from './user/private_spot'
import type { Methods as Methods18 } from './user/private_spot/_id@string'
import type { Methods as Methods19 } from './user/travel_plan'
import type { Methods as Methods20 } from './user/travel_plan/_id@string'
import type { Methods as Methods21 } from './user/travel_plan/_plan_id'
import type { Methods as Methods22 } from './user/travel_plan/_plan_id/_spot_id'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/management'
  const PATH1 = '/management/model_course'
  const PATH2 = '/management/official_spot'
  const PATH3 = '/image'
  const PATH4 = '/model_course'
  const PATH5 = '/modelcourse'
  const PATH6 = '/official_spot'
  const PATH7 = '/user'
  const PATH8 = '/user/model_course_bookmark'
  const PATH9 = '/user/official_spot_bookmark'
  const PATH10 = '/user/private_spot'
  const PATH11 = '/user/travel_plan'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    management: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          patch: (option: { body: Methods2['patch']['reqBody'], config?: T | undefined }) =>
            fetch(prefix, prefix1, PATCH, option).send(),
          $patch: (option: { body: Methods2['patch']['reqBody'], config?: T | undefined }) =>
            fetch(prefix, prefix1, PATCH, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      model_course: {
        _id: (val2: string) => {
          const prefix2 = `${PATH1}/${val2}`

          return {
            put: (option: { body: Methods4['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods4['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods4['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods4['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, PATH1, POST, option).send(),
        $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH1}`
      },
      official_spot: {
        _id: (val2: string) => {
          const prefix2 = `${PATH2}/${val2}`

          return {
            put: (option: { body: Methods6['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods6['put']['status']>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods6['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods6['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods6['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        _official_spot_id: (val2: string) => {
          const prefix2 = `${PATH2}/${val2}`

          return {
            image: {
              _image_id: (val4: string) => {
                const prefix4 = `${prefix2}${PATH3}/${val4}`

                return {
                  delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix4, DELETE, option).send(),
                  $delete: (option?: { config?: T | undefined } | undefined) =>
                    fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix4, DELETE, option).send().then(r => r.body),
                  $path: () => `${prefix}${prefix4}`
                }
              },
              post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option, 'FormData').send(),
              $post: (option: { body: Methods7['post']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods7['post']['status']>(prefix, `${prefix2}${PATH3}`, POST, option, 'FormData').send().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH3}`
            }
          }
        },
        post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH2, POST, option).send(),
        $post: (option: { body: Methods5['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods5['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH2}`
      },
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH0, POST, option).send(),
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods1['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    model_course: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH4, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    },
    modelcourse: {
      _id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    official_spot: {
      _id: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH6, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods11['get']['resBody'], BasicHeaders, Methods11['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`
    },
    user: {
      _id: (val1: string) => {
        const prefix1 = `${PATH7}/${val1}`

        return {
          /**
           * @returns 該当する主キーを持つユーザー情報
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns 該当する主キーを持つユーザー情報
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          patch: (option: { body: Methods14['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods14['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          $patch: (option: { body: Methods14['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods14['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods14['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods14['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      model_course_bookmark: {
        post: (option: { body: Methods15['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods15['post']['status']>(prefix, PATH8, POST, option).send(),
        $post: (option: { body: Methods15['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods15['post']['status']>(prefix, PATH8, POST, option).send().then(r => r.body),
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, PATH8, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
        put: (option: { body: Methods15['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods15['put']['status']>(prefix, PATH8, PUT, option).send(),
        $put: (option: { body: Methods15['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods15['put']['status']>(prefix, PATH8, PUT, option).send().then(r => r.body),
        delete: (option: { body: Methods15['delete']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods15['delete']['status']>(prefix, PATH8, DELETE, option).send(),
        $delete: (option: { body: Methods15['delete']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods15['delete']['status']>(prefix, PATH8, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH8}`
      },
      official_spot_bookmark: {
        post: (option: { body: Methods16['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods16['post']['status']>(prefix, PATH9, POST, option).send(),
        $post: (option: { body: Methods16['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods16['post']['status']>(prefix, PATH9, POST, option).send().then(r => r.body),
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH9, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
        put: (option: { body: Methods16['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods16['put']['status']>(prefix, PATH9, PUT, option).send(),
        $put: (option: { body: Methods16['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods16['put']['status']>(prefix, PATH9, PUT, option).send().then(r => r.body),
        delete: (option: { body: Methods16['delete']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods16['delete']['status']>(prefix, PATH9, DELETE, option).send(),
        $delete: (option: { body: Methods16['delete']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods16['delete']['status']>(prefix, PATH9, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH9}`
      },
      private_spot: {
        _id: (val2: string) => {
          const prefix2 = `${PATH10}/${val2}`

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            put: (option: { body: Methods18['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods18['put']['status']>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods18['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods18['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods18['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods18['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        post: (option: { body: Methods17['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods17['post']['status']>(prefix, PATH10, POST, option).send(),
        $post: (option: { body: Methods17['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods17['post']['status']>(prefix, PATH10, POST, option).send().then(r => r.body),
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH10, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH10}`
      },
      travel_plan: {
        _id: (val2: string) => {
          const prefix2 = `${PATH11}/${val2}`

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        _plan_id: (val2: number | string) => {
          const prefix2 = `${PATH11}/${val2}`

          return {
            _spot_id: (val3: number | string) => {
              const prefix3 = `${prefix2}/${val3}`

              return {
                put: (option: { body: Methods22['put']['reqBody'], config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods22['put']['status']>(prefix, prefix3, PUT, option).send(),
                $put: (option: { body: Methods22['put']['reqBody'], config?: T | undefined }) =>
                  fetch<void, BasicHeaders, Methods22['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods22['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods22['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            put: (option: { body: Methods21['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods21['put']['status']>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods21['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods21['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods21['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods21['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        post: (option: { body: Methods19['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods19['post']['status']>(prefix, PATH11, POST, option).send(),
        $post: (option: { body: Methods19['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods19['post']['status']>(prefix, PATH11, POST, option).send().then(r => r.body),
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH11, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH11}`
      },
      post: (option: { body: Methods13['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods13['post']['status']>(prefix, PATH7, POST, option).send(),
      $post: (option: { body: Methods13['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods13['post']['status']>(prefix, PATH7, POST, option).send().then(r => r.body),
      /**
       * @returns 保存されている全てのユーザー情報
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * @returns 保存されている全てのユーザー情報
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH7}`
    },
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, '', GET, option).send(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, '', GET, option).send().then(r => r.body),
    $path: () => `${prefix}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api