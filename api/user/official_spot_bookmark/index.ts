/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  post: {
    status: 200
    reqBody: Types.CreateOfficialSpotBookmarkDto
  }

  get: {
    status: 200
    resBody: Types.OfficialSpotBookmark[]
  }

  put: {
    status: 200
    reqBody: Types.UpdateOfficialSpotBookmarkDto
  }

  delete: {
    status: 200
    reqBody: Types.DeleteOfficialSpotBookmarkDto
  }
}
