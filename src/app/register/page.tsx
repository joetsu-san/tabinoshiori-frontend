"use client";

import Link from "next/link";
import { BirthdayInput } from "../../components/Header/BirthdayInput";
import { GenderInput } from "../../components/Header/GenderInput";
import { Center, Button, Title, Box, Group, Text } from "@mantine/core";

const Register = () => {
  return (
    <>
      <Center>
        <Title order={3} my={10}>
          ユーザー登録
        </Title>
      </Center>
      <Box mx={"10%"}>
        <Text>性別</Text>
        <GenderInput />
        <Text>生年月日</Text>
        <Group mb={20}>
          <BirthdayInput />
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
