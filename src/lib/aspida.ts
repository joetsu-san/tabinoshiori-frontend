import axios from "axios";
import api from "../../api/$api";
import aspida from "@aspida/fetch";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const fetchConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
} as const;

export const client = api(aspida(fetch, fetchConfig));
