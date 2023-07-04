import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/user/login";
  const POST = "POST";

  return {
    post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0["post"]["status"]>(prefix, PATH0, POST, option).send(),
    $post: (option: { body: Methods0["post"]["reqBody"]; config?: T | undefined }) =>
      fetch<void, BasicHeaders, Methods0["post"]["status"]>(prefix, PATH0, POST, option)
        .send()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
