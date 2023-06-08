import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@string'
import type { Methods as Methods2 } from './model_course'
import type { Methods as Methods3 } from './model_course/_id@string'
import type { Methods as Methods4 } from './official_spot'
import type { Methods as Methods5 } from './official_spot/_id@string'
import type { Methods as Methods6 } from './official_spot/_official_spot_id@string/image'
import type { Methods as Methods7 } from './official_spot/_official_spot_id@string/image/_image_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/management'
  const PATH1 = '/management/model_course'
  const PATH2 = '/management/official_spot'
  const PATH3 = '/image'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, prefix0, PATCH, option).send(),
        $patch: (option: { body: Methods1['patch']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, prefix0, PATCH, option).send().then(r => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, DELETE, option).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch(prefix, prefix0, DELETE, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    model_course: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

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
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).send(),
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    official_spot: {
      _id: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
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
      _official_spot_id: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          image: {
            _image_id: (val3: string) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`

              return {
                delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                $delete: (option?: { config?: T | undefined } | undefined) =>
                  fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            },
            post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option, 'FormData').send(),
            $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option, 'FormData').send().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`
          }
        }
      },
      post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).send(),
      $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
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
