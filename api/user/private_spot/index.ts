/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  post: {
    status: 200
    reqBody: Types.CreatePrivateSpotDto
  }

  get: {
    status: 200
    resBody: Types.PrivateSpot[]
  }
}
