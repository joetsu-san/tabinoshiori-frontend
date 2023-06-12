"use client";

import { Button, Container, Input, Box, Card, Image, Group, Text, Title } from "@mantine/core";
import { CardsCarousel } from "../../components/CardsCarousel";
import { IconClockFilled, IconSearch } from "@tabler/icons-react";
import { useRef, useState } from "react";

const ModelCourse = () => {
  //サンプル画像
  const sampleImage: string =
    "https://firebasestorage.googleapis.com/v0/b/my-portfolio-30354.appspot.com/o/ebe435f09324eb334280f879807e7842_t.jpeg?alt=media&token=78dd8564-07b7-4488-9574-ea0dae4ba6ea&_gl=1*14bl5h9*_ga*MTU5NTAyODI5Ni4xNjc2MjgzNDE3*_ga_CW55HF8NVT*MTY4NjIxMDU0Ny4xNS4xLjE2ODYyMTA2MTcuMC4wLjA.";
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
    <Container size="xl" mt="md">
      <CardsCarousel />
      <Box>
        <Title order={1} size={25} align="center" sx={{ margin: "20px 0 0 0" }}>
          モデルコース一覧
        </Title>
        <Input placeholder="検索" radius={20} icon={<IconSearch color="#eee" />} style={{ margin: "30px 0 0 0" }} />
        <Box>
          {datas.map((data, index) => (
            <Card
              id={"" + index}
              key={index}
              shadow="sm"
              style={{ backgroundColor: "#eee" }}
              sx={() => ({
                margin: "50px 0 0 0",
              })}
              onClick={sendDetail}
            >
              <Card.Section>
                <Image src={sampleImage} fit="fill" alt="サンプル画像" />
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text fw={500} size={15}>
                  {data}
                </Text>
              </Group>
              <Text fw={100} size={12}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </Text>
              <Group
                sx={() => ({
                  margin: "10px 0 0 0",
                })}
              >
                <IconClockFilled />
                <Text fw={300} size={13}>
                  １時間
                </Text>
              </Group>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ModelCourse;
