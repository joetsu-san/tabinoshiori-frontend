"use client";
import { ModelCourseOverview } from "@/@types";
import { Card, Image, Group, Text, SimpleGrid, Stack } from "@mantine/core";
import { IconClockFilled } from "@tabler/icons-react";
import Link from "next/link";

type ModelCourseListProps = {
  modelcourselist: ModelCourseOverview[];
  ser: string;
};

export const ModelCourseList = ({ modelcourselist, ser }: ModelCourseListProps) => {
  return (
    <SimpleGrid
      cols={3}
      mt={20}
      spacing="md"
      breakpoints={[
        { maxWidth: "48rem", cols: 2, spacing: "sm" },
        { maxWidth: "36rem", cols: 1, spacing: "sm" },
      ]}
    >
      {modelcourselist.map((modelcourse) => (
        <Card key={modelcourse.id} component={Link} href={`modelcourse/${modelcourse.id}`}>
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
            <Text size={12} lineClamp={2}>
              {modelcourse.description}
            </Text>
            <Group spacing="xs">
              <IconClockFilled />
              <Text size={13}> {modelcourse.requiredMinute}分</Text>
            </Group>
          </Stack>
        </Card>
      )) || (
        <Text fw={500} size={15} mt={10} align="center">
          お探しのモデルコースは見つかりませんでした
        </Text>
      )}
    </SimpleGrid>
  );
};
