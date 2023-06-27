import api from "../../api/$api";
import aspida from "@aspida/fetch";
import useAspidaSWR from "@aspida/swr";

export const client = api(aspida());

export const useAspidaSWRImutable = (param: any, query: any) => {
  const { data, error } = useAspidaSWR(param, query, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error };
};
