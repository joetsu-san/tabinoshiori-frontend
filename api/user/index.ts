/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 200
    reqBody: Types.CreateUserDto
  }

  get: {
    status: 200
    /** 保存されている全てのユーザー情報 */
    resBody: Types.User[]
  }
}
