"use client";

import { Card, Image, Text, Button, Grid, Container, Flex } from "@mantine/core";
import { IconArrowBackUp, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useModelCourseList } from "../_hooks/useModelCourseList";

const ModelCourse = () => {
  const { data, error } = useModelCourseList();

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
                        src={val.modelCourseImages[0] != undefined ? val.modelCourseImages[0].src : "/dummyImage.svg"}
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
