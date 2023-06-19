// components/RouterTransition.tsx
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import Router from "next/router";

export function RouterTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const searchPath = useSearchParams();

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(url);
      url !== pathname && nprogress.start();
    };
    const handleComplete = () => nprogress.complete();

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, [pathname]);

  return <NavigationProgress autoReset={true} />;
}
