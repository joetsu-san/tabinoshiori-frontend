import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./_official_spot_id@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/official_spot";
  const GET = "GET";

  return {
    _official_spot_id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1["get"]["resBody"], BasicHeaders, Methods1["get"]["status"]>(
            prefix,
            prefix0,
            GET,
            option
          ).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1["get"]["resBody"], BasicHeaders, Methods1["get"]["status"]>(prefix, prefix0, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0["get"]["resBody"], BasicHeaders, Methods0["get"]["status"]>(prefix, PATH0, GET, option).json(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0["get"]["resBody"], BasicHeaders, Methods0["get"]["status"]>(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;