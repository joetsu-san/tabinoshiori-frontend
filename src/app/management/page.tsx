"use client";

import { Button, Container, Flex, Text } from "@mantine/core";
import Link from "next/link";
// import { redirectLogin } from "./_functions/redirectLogin";

const Management = () => {
  // redirectLogin();

  return (
    <Container size={"sm"}>
      <Flex direction={"column"} align={"center"}>
        <Text size={"lg"} mt={20} mb={20}>
          トップページ
        </Text>
      </Flex>

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
  );
};

export default Management;
