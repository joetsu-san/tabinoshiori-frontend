import api from "../../api/$api";
import aspida from "@aspida/fetch";
import useAspidaSWR from "@aspida/swr";

export const client = api(
  aspida(fetch, { baseURL: process.env.NEXT_PUBLIC_BASE_URL, mode: "cors", credentials: "include" })
);

export const useAspidaSWRImmutable = (path: any, query: any) => {
  const { data, error } = useAspidaSWR(path, query, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error };
};
