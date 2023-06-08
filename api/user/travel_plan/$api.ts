import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@string'
import type { Methods as Methods2 } from './_plan_id'
import type { Methods as Methods3 } from './_plan_id/_spot_id'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user/travel_plan'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    _plan_id: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        _spot_id: (val1: number | string) => {
          const prefix1 = `${prefix0}/${val1}`

          return {
            put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).send(),
            $put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}`
          }
        },
        put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, prefix0, PUT, option).send(),
        $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, prefix0, PUT, option).send().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
