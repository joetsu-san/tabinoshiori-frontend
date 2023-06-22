/* eslint-disable */
import type * as Types from "../../@types";

export type Methods = {
  get: {
    status: 200;
    /** 該当する主キーを持つユーザー情報 */
    resBody: Types.User;
  };

  put: {
    status: 200;
    reqBody: Types.UpdateUserDto;
  };

  delete: {
    status: 200;
  };
};
