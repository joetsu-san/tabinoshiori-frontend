import { NextPageContext } from "next";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";

export const redirectLogin = (ctx?: NextPageContext) => {
  const cookie = parseCookies(ctx);
  console.log(cookie);
  // if (!cookie.session_id) redirect("/management/login");
};
