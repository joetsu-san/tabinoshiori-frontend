"use client";

import { Button, Container, Flex, PasswordInput, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconArrowBackUp } from "@tabler/icons-react";
import axios from "axios";
import Link from "next/link";
// import { redirect } from 'next/navigation'
import { useRouter } from "next/navigation";
import { z } from "zod";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

type FormType = {
  username: string;
  email: string;
  password: string;
};

const AccountRegister = () => {
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

  const handleSubmit = async (value: FormType) => {
    console.log(value);
    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/management`, {
      username: value.username,
      email: value.email,
      password: value.password,
    });

    router.replace("/management/account");
  };

  return (
    <div>
      <Container size={"xl"}>
        <h2>アカウント追加</h2>

        <Flex direction={"row"} justify={"space-between"}>
          <Link href={"/management/account"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>
        </Flex>

        <form onSubmit={formValue.onSubmit((value: FormType) => handleSubmit(value))}>
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
