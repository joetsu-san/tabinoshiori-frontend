import api from "../../api/$api";
import aspida from "@aspida/fetch";

export const client = api(
  aspida(fetch, { baseURL: process.env.NEXT_PUBLIC_API_URL, mode: "cors", credentials: "include" })
);
