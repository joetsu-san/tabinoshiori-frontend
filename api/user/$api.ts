import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@string'
import type { Methods as Methods2 } from './model_course_bookmark'
import type { Methods as Methods3 } from './official_spot_bookmark'
import type { Methods as Methods4 } from './private_spot'
import type { Methods as Methods5 } from './private_spot/_id@string'
import type { Methods as Methods6 } from './travel_plan'
import type { Methods as Methods7 } from './travel_plan/_id@string'
import type { Methods as Methods8 } from './travel_plan/_plan_id'
import type { Methods as Methods9 } from './travel_plan/_plan_id/_spot_id'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user'
  const PATH1 = '/user/model_course_bookmark'
  const PATH2 = '/user/official_spot_bookmark'
  const PATH3 = '/user/private_spot'
  const PATH4 = '/user/travel_plan'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * @returns 該当する主キーを持つユーザー情報
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns 該当する主キーを持つユーザー情報
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).send(),
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['patch']['status']>(prefix, prefix0, PATCH, option).send().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    model_course_bookmark: {
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).send(),
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, PATH1, PUT, option).send(),
      $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, PATH1, PUT, option).send().then(r => r.body),
      delete: (option: { body: Methods2['delete']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, PATH1, DELETE, option).send(),
      $delete: (option: { body: Methods2['delete']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, PATH1, DELETE, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    official_spot_bookmark: {
      post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option).send(),
      $post: (option: { body: Methods3['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, PATH2, PUT, option).send(),
      $put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, PATH2, PUT, option).send().then(r => r.body),
      delete: (option: { body: Methods3['delete']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, PATH2, DELETE, option).send(),
      $delete: (option: { body: Methods3['delete']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, PATH2, DELETE, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    private_spot: {
      _id: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods5['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods5['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH3, POST, option).send(),
      $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    travel_plan: {
      _id: (val1: string) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      _plan_id: (val1: number | string) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          _spot_id: (val2: number | string) => {
            const prefix2 = `${prefix1}/${val2}`

            return {
              put: (option: { body: Methods9['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods9['put']['status']>(prefix, prefix2, PUT, option).send(),
              $put: (option: { body: Methods9['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods9['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix2, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix2}`
            }
          },
          put: (option: { body: Methods8['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods8['put']['status']>(prefix, prefix1, PUT, option).send(),
          $put: (option: { body: Methods8['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods8['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH4, POST, option).send(),
      $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH4, POST, option).send().then(r => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH4, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    },
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
    /**
     * @returns 保存されている全てのユーザー情報
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * @returns 保存されている全てのユーザー情報
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
