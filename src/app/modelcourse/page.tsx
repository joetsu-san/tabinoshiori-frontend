"use client";

import { Container, Input, Box, Card, Image, Group, Text, Title, SimpleGrid, Stack } from "@mantine/core";
import { CardsCarousel } from "@/components/CardsCarousel";
import { IconClockFilled, IconSearch } from "@tabler/icons-react";
import { useRef, useState } from "react";

const ModelCourse = () => {
  //サンプル画像
  const sampleImage: string =
    "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80";
  //テストデータ
  const datas = ["test1", "test2", "test3", "test4", "test5"];
  //
  const container = useRef(null);
  //スクロールイベント（未実装）
  const conrainerScroll = () => {
    const el = container.current;
    // const rate = el.scrollTop / (el.scrollHeight - el.clientHeight);
    // console.log(el);
    console.log("el");
  };
  //クリックイベント
  const sendDetail = (e: React.MouseEvent) => {
    console.log(e.currentTarget.id);
  };

  return (
    <Container size="xl" mt={30}>
      <CardsCarousel />
      <Box>
        <Title size={25} align="center" mt={30}>
          モデルコース一覧
        </Title>
        <Input placeholder="検索" radius={20} icon={<IconSearch color="#eee" />} mt={30} />
        <SimpleGrid
          cols={3}
          mt={20}
          spacing="md"
          breakpoints={[
            { maxWidth: "48rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
          {datas.map((data, index) => (
            <Card key={index} onClick={sendDetail}>
              <Card.Section>
                <Image src={sampleImage} fit="cover" alt="サンプル画像" height={160} />
              </Card.Section>
              <Stack spacing="xs">
                <Text fw={500} size={18} mt={10}>
                  {data}
                </Text>
                <Text size={12}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Text>
                <Group spacing="xs">
                  <IconClockFilled />
                  <Text size={13}>１時間</Text>
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ModelCourse;
