"use client";

import Link from "next/link";
import { useState } from "react";
import { Center, Select, Button, Title, Box, Group, Text } from "@mantine/core";

const Register = () => {
  const [value, setValue] = useState<Date | null>(null);

  //年
  const year = Array(130)
    .fill(0)
    .map((_, index) => `${2030 - index}`);
  //月
  const month = Array(12)
    .fill(0)
    .map((_, index) => `${index + 1}`);
  //日
  const day = Array(31)
    .fill(0)
    .map((_, index) => `${index + 1}`);

  return (
    <>
      <Center>
        <Title order={3} my={10}>
          ユーザー登録
        </Title>
      </Center>
      <Box mx={"10%"}>
        <Text>性別</Text>
        <Select
          placeholder="性別を選択してください"
          data={[
            { value: "male", label: "男性" },
            { value: "female", label: "女性" },
            { value: "other", label: "その他" },
          ]}
          required
          mb={40}
        />
        <Text>生年月日</Text>
        <Group mb={20}>
          <Select
            data={year}
            placeholder="年"
            dropdownComponent="div"
            style={{ width: "5rem" }}
            rightSection={false}
            size="xs"
          />
          <Text mx={-10}>年</Text>
          <Select data={month} placeholder="月" dropdownComponent="div" style={{ width: "4rem" }} size="xs" />
          <Text mx={-10}>月</Text>
          <Select data={day} placeholder="日" dropdownComponent="div" style={{ width: "4rem" }} size="xs" />
          <Text mx={-10}>日</Text>
        </Group>
        <Group position="center">
          <Link href="/register/complete">
            <Button color="dark">登録</Button>
          </Link>
        </Group>
      </Box>
    </>
  );
};

export default Register;
