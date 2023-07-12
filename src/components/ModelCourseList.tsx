"use client";
import { ModelCourseOverview } from "@/@types";
import { Card, Image, Group, Text, SimpleGrid, Stack } from "@mantine/core";
import { IconClockFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ModelCourseListProps = {
  modelcourselist: ModelCourseOverview[];
  msg: boolean;
  ser: string;
};

export const ModelCourseList = ({ modelcourselist, msg, ser }: ModelCourseListProps) => {
  const [allItems, setAllItems] = useState<ModelCourseOverview[]>([]);
  const [items, setItems] = useState<ModelCourseOverview[]>([]);
  const [rate, setRate] = useState(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const el = container.current?.clientHeight;
      const win = window.scrollY;
      const rate = el ? el - win : 3500;
      if (rate < 200) {
        setItems((prevItems) => {
          const newItems = [...prevItems, ...allItems.slice(prevItems.length, prevItems.length + 3)];
          return newItems;
        });
      }
    });
  }, [allItems, items, ser]);
  useEffect(() => {
    const data: ModelCourseOverview[] = [];
    for (let i = 0; i < 5000; i++) {
      for (let i = 0; i < modelcourselist.length; i++) {
        data.push(modelcourselist[i]);
      }
    }
    setAllItems(data);
    setItems(data.slice(0, modelcourselist.length));
  }, [modelcourselist, ser]);
  return (
    <SimpleGrid
      cols={3}
      mt={20}
      pb={msg ? 500 : 100}
      spacing="md"
      breakpoints={[
        { maxWidth: "48rem", cols: 2, spacing: "sm" },
        { maxWidth: "36rem", cols: 1, spacing: "sm" },
      ]}
      ref={container}
    >
      {items
        .filter((values, index) => {
          if (values.title.indexOf(ser) !== -1) {
            return values;
          }
        })
        .map((modelcourse, index) => (
          <Card key={index} component={Link} href={"modelcourse/" + modelcourse.id}>
            <Card.Section>
              <Image
                src={modelcourse.modelCourseImages[0]?.src || "/dummyImage.svg"}
                fit="cover"
                alt="サンプル画像"
                height={160}
              />
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
      <Text display={msg ? "block" : "none"} fw={500} size={15} mt={10} align="center">
        お探しのモデルコースは見つかりませんでした
      </Text>
    </SimpleGrid>
  );
};
