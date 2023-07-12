"use client";

import { Card, Image, Text, Button, Group, TextInput, Grid, Container, Flex } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";
import { NextPageContext } from "next";
import Link from "next/link";
import { managementClient } from "../_aspida/managementAspida";
import { LoginAdministratorDto } from "@/@types";

const Login = (ctx: NextPageContext) => {
  const router = useRouter();

  const schema = z.object({
    email: z.string().email({ message: "メールアドレスの形式で入力してください" }),
    password: z.string().min(5, { message: "パスワードは5文字以上で入力してください" }),
  });

  const formValue = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (value: LoginAdministratorDto) => {
    try {
      await managementClient.management.login.$post({
        body: value,
      });
      setCookie(ctx, "login_cookie", "logging in", {
        maxAge: 30 * 24 * 60 * 60,
      });
      router.push("management/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container size={"sm"}>
      <Flex direction={"column"} align={"center"}>
        <Text size={"lg"} mt={20}>
          ログイン
        </Text>
      </Flex>
      <form onSubmit={formValue.onSubmit((value) => handleSubmit(value))}>
        <TextInput label="メールアドレス" {...formValue.getInputProps("email")} mb={20} />
        <TextInput label="パスワード" type="password" {...formValue.getInputProps("password")} mb={20} />
        <Flex direction={"column"} align={"center"}>
          <Button type="submit">ログイン</Button>
        </Flex>
      </form>

      <Flex direction={"column"} align={"center"} mt={20}>
        <Link href={"/management"}>
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
            }}
          >
            管理者トップページへ戻る
          </span>
        </Link>
      </Flex>
    </Container>
  );
};

export default Login;
