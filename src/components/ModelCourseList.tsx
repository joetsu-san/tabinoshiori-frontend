"use client";

import { Card, Image, Group, Text, SimpleGrid, Stack } from "@mantine/core";
import { IconClockFilled } from "@tabler/icons-react";

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

export const ModelCourseList = ({ modelcourselist }: ModelCourseListProps) => {
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
      {modelcourselist.map((modelcourse, index) => (
        <Card key={index}>
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
