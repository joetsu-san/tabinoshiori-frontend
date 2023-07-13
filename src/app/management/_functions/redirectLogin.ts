import axios from "axios";
import { NextPageContext } from "next";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";

export const redirectLogin = async (router: AppRouterInstance, ctx?: NextPageContext) => {
  // const cookie = parseCookies(ctx);
  // console.log(cookie);
  // if (!cookie.login_cookie) {
  //   router.push("/management/login");
  // }
};
