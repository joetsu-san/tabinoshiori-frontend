"use client";

import useAspidaSWR from "@aspida/swr";
import { Card, Image, Text, Button, Grid, Container, Flex } from "@mantine/core";
import { IconArrowBackUp, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { managementClient } from "../_aspida/managementAspida";

const ModelCourse = () => {
  const { data, error } = useAspidaSWR(managementClient.model_course);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Container size={"xl"}>
        <Flex direction={"column"} align={"center"}>
          <Text size={"lg"} mt={20} mb={20}>
            モデルコース一覧
          </Text>
        </Flex>

        <Flex direction={"row"} justify={"space-between"} mb={20}>
          <Link href={"/management"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>

          <Link href={"/management/model_course/register"}>
            <Button variant="filled" leftIcon={<IconPlus />}>
              モデルコース追加
            </Button>
          </Link>
        </Flex>
        <Grid>
          {data.map((val, i) => {
            return (
              <Grid.Col key={i} md={6} lg={3}>
                <Link href={`/management/model_course/${val.id}`}>
                  <Card shadow="sm" padding="sm" radius="md" withBorder key={i}>
                    <Card.Section>
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        }
                        height={160}
                        alt="Norway"
                      />
                    </Card.Section>

                    <Text weight={500}>{val.title}</Text>
                  </Card>
                </Link>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default ModelCourse;
