import api from "../../api/$api";
import aspida from "@aspida/fetch";

const fetchConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
} as const;

export const client = api(aspida(fetch, fetchConfig));
