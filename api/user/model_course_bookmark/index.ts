/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  post: {
    status: 200
    reqBody: Types.CreateModelCourseBookmarkDto
  }

  get: {
    status: 200
    resBody: Types.ModelCourseBookmark[]
  }

  put: {
    status: 200
    reqBody: Types.UpdateModelCourseBookmarkDto
  }

  delete: {
    status: 200
    reqBody: Types.DeleteModelCourseBookmarkDto
  }
}
