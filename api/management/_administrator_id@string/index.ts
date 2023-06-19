/* eslint-disable */
import type * as Types from "../../@types";

export type Methods = {
  get: {
    status: 200;
    resBody: Types.Administrator[];
  };

  put: {
    reqBody: Types.UpdateAdministratorDto;
  };

  delete: {};
};
