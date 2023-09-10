"use client";
import { Header as MantineHeader, Group, Text } from "@mantine/core";
import { Button } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { managementClient } from "./_aspida/managementAspida";
import { SWRConfig } from "swr";

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [logined, setLogined] = useState<{ [key: string]: string }>();

  useEffect(() => {
    const cookie = parseCookies();
    setLogined(cookie);
  }, [pathname]);

  const logout = async () => {
    destroyCookie(null, "login_cookie");
    await managementClient.management.logout.post();
    router.push("management/login");
  };

  return (
    <SWRConfig value={{ revalidateIfStale: true }}>
      <MantineHeader height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Text weight={700} fz={"lg"}>
            管理者ページ
          </Text>

          {logined?.login_cookie ? (
            <Button onClick={logout} color="red">
              ログアウト
            </Button>
          ) : (
            <Button onClick={() => router.push("/management/login")}>ログイン</Button>
          )}
        </Group>
      </MantineHeader>
      {children}
    </SWRConfig>
  );
}
