"use client";

import { Card, Image, Group, Text, SimpleGrid, Stack, Box } from "@mantine/core";
import { IconClockFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ModelCourseOverview = {
  id: string;
  title: string;
  description: string;
  requiredMinute: string;
  image: string;
};

type ModelCourseListProps = {
  modelcourselist: ModelCourseOverview[];
};
type Item = {
  id: number;
  content: string;
}

export const ModelCourseList = ({ modelcourselist }: ModelCourseListProps) => {
  const [allItems, setAllItems] = useState<ModelCourseOverview[]>([]);
  const [items, setItems] = useState<ModelCourseOverview[]>([]);
  const [rate, setRate] = useState();
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const el = container.current?.clientHeight;
      const win = window.scrollY;
      const rate = el ? el - win : 3500;
      // スクロール位置の割合が8割を超えている場合は描画するアイテムを追加
      if (rate < 200) {
        setItems((prevItems) => {
          const newItems = [...prevItems, ...allItems.slice(prevItems.length, prevItems.length + 10)];
          return newItems;
        });
      }
    });
  });
  useEffect(() => {
    const data: ModelCourseOverview[] = [];
    // 50万件の配列を用意
    for (let i = 0; i < 50; i++) {
      for (let i = 0; i < modelcourselist.length; i++) {
        data.push(modelcourselist[i]);
      }
    }
    setAllItems(data);
    setItems(data.slice(0, modelcourselist.length));
  }, [modelcourselist]);
  return (
    <SimpleGrid
      cols={3}
      mt={20}
      spacing="md"
      breakpoints={[
        { maxWidth: "48rem", cols: 2, spacing: "sm" },
        { maxWidth: "36rem", cols: 1, spacing: "sm" },
      ]}
      ref={container}
    >
      {items.map((modelcourse, index) => (
        <Card key={index} component={Link} href={"modelcourse/" + modelcourse.id}>
          <Card.Section>
            <Image src={modelcourse.image} fit="cover" alt="サンプル画像" height={160} />
          </Card.Section>
          <Stack spacing="xs">
            <Text fw={500} size={18} mt={10}>
              {modelcourse.title}
            </Text>
            <Text size={12}>{modelcourse.description}</Text>
            <Group spacing="xs">
              <IconClockFilled />
              <Text size={13}> {modelcourse.requiredMinute}</Text>
            </Group>
          </Stack>
        </Card>
      ))}
    </SimpleGrid>
  );
};
