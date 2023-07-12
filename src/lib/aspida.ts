import axios from "axios";
import api from "@/$api";
import aspida, { FetchConfig } from "@aspida/fetch";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const fetchConfig: FetchConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
} as const;

export const client = api(aspida(fetch, fetchConfig));
