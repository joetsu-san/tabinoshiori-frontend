"use client";

import { Button, Container, Flex, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowBackUp } from "@tabler/icons-react";
import Link from "next/link";

// ダミーデータ
const userData = {
  id: "00000000-0000-0000-0000-000000000000",
  username: "John Doe",
  email: "jhon@example.com",
};

const AccountEdit = () => {
  const formValue = useForm({
    initialValues: {
      userName: userData.username,
      email: userData.email,
      password: "",
    },
  });

  return (
    <div>
      <Container size={"xl"}>
        <h2>アカウント編集</h2>

        <Flex direction={"row"} justify={"space-between"}>
          <Link href={"/management/account"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>
        </Flex>

        <form onSubmit={formValue.onSubmit((value) => console.log(value))}>
          <Flex direction={"column"} gap={20}>
            <TextInput placeholder="" label="ユーザー名" {...formValue.getInputProps("userName")} />
            <TextInput placeholder="" label="email" {...formValue.getInputProps("email")} />
            <PasswordInput placeholder="" label="パスワード" {...formValue.getInputProps("password")} />
            <Button type="submit">登録</Button>
            <Button type="button" color="red" onClick={() => console.log("削除")}>
              削除
            </Button>
          </Flex>
        </form>
      </Container>
    </div>
  );
};

export default AccountEdit;
