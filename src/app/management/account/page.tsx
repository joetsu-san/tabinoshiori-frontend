"use client";

import { Button, Card, Container, Flex } from "@mantine/core";
import { IconArrowBackUp, IconPlus } from "@tabler/icons-react";
import Link from "next/link";

const accountList = [
  {
    id: "00000000-0000-0000-0000-000000000000",
    username: "John Doe",
    email: "jhon@example.com",
  },
  {
    id: "00000000-0000-0000-0000-000000000000",
    username: "John Doe",
    email: "jhon@example.com",
  },
  {
    id: "00000000-0000-0000-0000-000000000000",
    username: "John Doe",
    email: "jhon@example.com",
  },
  {
    id: "00000000-0000-0000-0000-000000000000",
    username: "John Doe",
    email: "jhon@example.com",
  },
];

const Account = () => {
  return (
    <div>
      <Container size={"xl"}>
        <h2>管理者アカウント一覧</h2>

        <Flex direction={"row"} justify={"space-between"}>
          <Link href={"/management"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>
          <Link href={"/management/account/register"}>
            <Button variant="filled" leftIcon={<IconPlus />}>
              アカウント追加
            </Button>
          </Link>
        </Flex>

        <Flex direction={"column"} gap={20}>
          {accountList.map((val, i) => {
            return (
              <Link key={i} href={`/management/account/${val.id}`}>
                <Card shadow="sm" padding="sm" radius="md" withBorder key={i}>
                  <p>{val.username}</p>
                  <p>{val.email}</p>
                </Card>
              </Link>
            );
          })}
        </Flex>
      </Container>
    </div>
  );
};

export default Account;
