"use client";

import { client } from "@/hooks/useAspidaSWRImmutable";
import useAspidaSWR from "@aspida/swr";
import { Button, Container, Flex, PasswordInput, TextInput, Modal, Text } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconArrowBackUp } from "@tabler/icons-react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { z } from "zod";
import { UpdateAdministratorDto } from "@/@types";
import { managementClient } from "../../_aspida/managementAspida";

type PageProps = {
  params: {
    account_id: string;
  };
};

const AccountEdit: NextPage<PageProps> = ({ params }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const router = useRouter();

  const { data, error } = useAspidaSWR(client.management._administrator_id(params.account_id));

  const schema = z.object({
    username: z.string().min(4, { message: "ユーザー名は4文字以上で入力してください" }),
    email: z.string().email({ message: "メールアドレスの形式で入力してください" }),
    password: z.string().min(5, { message: "パスワードは5文字以上で入力してください" }),
  });

  const formValue = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: zodResolver(schema),
  });

  useEffect(() => {
    if (data) {
      formValue.setValues({
        username: data.username,
        email: data.email,
      });
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // アップデート
  const handleSubmit = async (value: UpdateAdministratorDto) => {
    await managementClient.management._administrator_id(params.account_id).$put({ body: value });
    router.push("/management/account");
  };

  // 削除
  const deleteSubmit = async () => {
    await managementClient.management._administrator_id(params.account_id).$delete();
    router.push("/management/account");
  };

  return (
    <div>
      <Container size={"xl"}>
        <Flex direction={"column"} align={"center"}>
          <Text size={"lg"} mt={20}>
            アカウント編集
          </Text>
        </Flex>

        <Flex direction={"row"} justify={"space-between"} mb={20}>
          <Link href={"/management/account"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>
        </Flex>

        <form onSubmit={formValue.onSubmit((value: UpdateAdministratorDto) => handleSubmit(value))}>
          <Flex direction={"column"} gap={20} mb={40}>
            <TextInput placeholder="" label="ユーザー名" withAsterisk {...formValue.getInputProps("username")} />
            <TextInput placeholder="" label="email" withAsterisk {...formValue.getInputProps("email")} />
            <PasswordInput
              autoComplete="false"
              placeholder=""
              label="パスワード"
              withAsterisk
              {...formValue.getInputProps("password")}
            />
            <Button type="submit">更新</Button>
          </Flex>
        </form>

        <Modal opened={opened} onClose={close} title="アカウント管理">
          <Flex direction={"column"} justify={"center"}>
            <Text>管理者アカウントを削除します</Text>
            <Flex direction={"row"} justify={"space-around"}>
              <Button onClick={close} variant="outline">
                キャンセル
              </Button>
              <Button onClick={deleteSubmit} color="red">
                OK
              </Button>
            </Flex>
          </Flex>
        </Modal>

        <Flex direction={"row"} justify={"center"}>
          <Button type="button" color="red" onClick={open}>
            削除
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default AccountEdit;
