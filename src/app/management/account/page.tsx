"use client";

import { Button, Flex } from "@mantine/core";
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
      <p>管理者アカウント一覧</p>

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

      <Flex direction={"column"}>
        {accountList.map((val, i) => {
          return (
            <Link key={i} href={`/management/account/${val.id}`}>
              <div>
                <p>{val.username}</p>
                <p>{val.email}</p>
              </div>
            </Link>
          );
        })}
      </Flex>
    </div>
  );
};

export default Account;
