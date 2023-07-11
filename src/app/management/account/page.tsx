"use client";

import { useDebounce } from "@/app/tourismspot/_hooks/useDebounce";
import { client } from "@/hooks/useAspidaSWRImmutable";
import useAspidaSWR from "@aspida/swr";
import { Button, Card, Container, Flex } from "@mantine/core";
import { IconArrowBackUp, IconPlus } from "@tabler/icons-react";
import Link from "next/link";

const Account = () => {
  const { data, error } = useAspidaSWR(client.management, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  console.log(data);
  if (error) return <div>failed to load</div>;
  if (!Array.isArray(data)) return <div>loading...</div>;

  return (
    <div>
      <Container size={"xl"}>
        <h2>管理者アカウント一覧</h2>

        <Flex direction={"row"} justify={"space-between"} mb={20}>
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

        <Flex direction={"column"} gap={20} mb={"6rem"}>
          {data.map((val, i) => {
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
