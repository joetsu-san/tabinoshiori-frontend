"use client";

import { Button, Container, Flex, PasswordInput, TextInput, Text } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconArrowBackUp } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { CreateAdministratorDto } from "@/@types";
import { managementClient } from "../../_aspida/managementAspida";

const AccountRegister = () => {
  // バリデーション
  const schema = z.object({
    username: z.string().min(4, { message: "ユーザー名は4文字以上で入力してください" }),
    email: z.string().email({ message: "メールアドレスの形式で入力してください" }),
    password: z.string().min(5, { message: "パスワードは5文字以上で入力してください" }),
  });

  const router = useRouter();

  const formValue = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: zodResolver(schema),
  });

  // 送信時処理
  const handleSubmit = async (value: CreateAdministratorDto) => {
    await managementClient.management.$post({ body: value });
    router.push("/management/account");
  };

  return (
    <div>
      <Container size={"xl"}>
        <Flex direction={"column"} align={"center"}>
          <Text size={"lg"} mt={20}>
            アカウント追加
          </Text>
        </Flex>

        <Flex direction={"row"} justify={"space-between"}>
          <Link href={"/management/account"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>
        </Flex>

        <form onSubmit={formValue.onSubmit((value: CreateAdministratorDto) => handleSubmit(value))}>
          <Flex direction={"column"} gap={20}>
            <TextInput placeholder="" label="ユーザー名" withAsterisk {...formValue.getInputProps("username")} />
            <TextInput placeholder="" label="email" withAsterisk {...formValue.getInputProps("email")} />
            <PasswordInput
              autoComplete="false"
              placeholder=""
              label="パスワード"
              withAsterisk
              {...formValue.getInputProps("password")}
            />
            <Button type="submit">登録</Button>
          </Flex>
        </form>
      </Container>
    </div>
  );
};

export default AccountRegister;
