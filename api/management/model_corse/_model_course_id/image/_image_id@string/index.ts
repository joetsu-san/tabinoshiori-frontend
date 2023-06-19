/* eslint-disable */
import type { ReadStream } from "fs";

export type Methods = {
  put: {
    status: 200;
    reqFormat: FormData;

    reqBody: {
      files: (File | ReadStream)[];
    };
  };

  delete: {
    status: 200;
  };
};
