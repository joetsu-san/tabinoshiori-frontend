"use client";

import {
  Card,
  Image,
  Text,
  Button,
  Group,
  TextInput,
  Grid,
  Container,
  Textarea,
  FileInput,
  Flex,
  NumberInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { setCookie, parseCookies } from "nookies";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { NextPageContext } from "next";

const redirectLogined = (ctx?: NextPageContext) => {
  const cookie = parseCookies(ctx, "session_id");
  // console.log(cookie.session_id)
  if (cookie.session_id) redirect("management/");
};

const Login = (ctx: NextPageContext) => {
  redirectLogined(ctx);

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

  const handleSubmit = async (value: any) => {
    const sessionId = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/management/login`,
      {
        email: value.email,
        password: value.password,
      },
      { withCredentials: true }
    );
    console.log("session_id", sessionId);
    router.push("management/");
  };

  return (
    <Container size={"sm"}>
      <Text>ログイン</Text>
      <form onSubmit={formValue.onSubmit((value) => handleSubmit(value))}>
        <TextInput label="メールアドレス" {...formValue.getInputProps("email")} />
        <TextInput label="パスワード" type="password" {...formValue.getInputProps("password")} />
        <Button type="submit">ログイン</Button>
      </form>
    </Container>
  );
};

export default Login;
