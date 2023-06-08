/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.PrivateSpot
  }

  put: {
    status: 200
    reqBody: Types.UpdatePrivateSpotDto
  }

  delete: {
    status: 200
  }
}
