/* eslint-disable */
import type * as Types from "../../../@types";

export type Methods = {
  get: {
    status: 200;
    resBody: Types.TravelPlanDetail;
  };

  put: {
    status: 200;
    reqBody: Types.UpdateTravelPlanDto;
  };

  delete: {
    status: 200;
  };
};
