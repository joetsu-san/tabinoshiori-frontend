"use client";
import { Header as MantineHeader, Group, Text } from "@mantine/core";
import { Button, Flex } from "@mantine/core";
import axios from "axios";
import { NextPageContext } from "next";
import { usePathname, useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";
import { useEffect, useState } from "react";

export default function ManagementLayout({ children }: { children: React.ReactNode }, ctx?: NextPageContext) {
  const router = useRouter();
  const pathname = usePathname();
  const [logined, setLogined] = useState<{ [key: string]: string }>();

  useEffect(() => {
    const cookie = parseCookies();
    console.log(cookie);
    setLogined(cookie);
  }, [pathname]);

  const logout = async () => {
    destroyCookie(ctx, "login_cookie");
    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/management/logout`, {}, { withCredentials: true });
    router.push("management/login");
  };

  return (
    <>
      <MantineHeader height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Text weight={700} fz={"lg"}>
            管理者ページ
          </Text>

          {/* TODO: ログインしているかしていないかで条件分岐させる */}
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
    </>
  );
}
