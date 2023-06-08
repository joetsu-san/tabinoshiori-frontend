/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 200
    reqBody: Types.CreateAdministoratorDto
  }

  get: {
    status: 200
    resBody: Types.Administorator[]
  }
}
