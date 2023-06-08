/* eslint-disable */
import type { ReadStream } from 'fs'

export type Methods = {
  post: {
    status: 200
    reqFormat: FormData

    reqBody: {
      files: (File | ReadStream)[]
    }
  }
}
