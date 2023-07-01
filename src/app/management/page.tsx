"use client";

import { Button, Container, Flex } from "@mantine/core";
import Link from "next/link";
import { redirect } from "next/navigation";

// const redirectLogin = () => {
//   redirect("/login");
// }

const Management = () => {
  // redirect("/management/login")

  return (
    <div>
      <p>トップページ</p>

      <Container size={"sm"}>
        <Flex direction={"column"} gap={20} align={"center"}>
          <Link href={"/management/account"}>
            <Button variant="outline">管理者アカウント</Button>
          </Link>

          <Link href={"/management/official_spot"}>
            <Button variant="outline">観光地</Button>
          </Link>

          <Link href={"/management/model_course"}>
            <Button variant="outline">モデルコース</Button>
          </Link>
        </Flex>
      </Container>
    </div>
  );
};

export default Management;
