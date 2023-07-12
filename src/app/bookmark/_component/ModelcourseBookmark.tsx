import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { IconClockFilled, IconHeart } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useModelcourseBookmarkList } from "@/hooks/useModelcourseBookmarkList";
import { LoadingDisplay } from "@/components/LoadingDisplay";

export const ModelcourseBookmark = () => {
  const { data: modelcourselist, error, mutate } = useModelcourseBookmarkList();
  const [liked, setLiked] = useState<boolean[]>((modelcourselist ?? Array()).map((_) => true));

  const toggleLiked = (index: number) => {
    setLiked(liked.map((bool, i) => (i === index ? !bool : bool)));
  };

  useEffect(() => {
    mutate();
  }, []);

  if (!modelcourselist)
    return (
      <Tabs.Panel value="modelCourse">
        <LoadingDisplay />
      </Tabs.Panel>
    );

  return (
    <Tabs.Panel value="modelCourse">
      <Container size="xl" mt={30}>
        <SimpleGrid
          cols={3}
          mt={20}
          pb={100}
          spacing="md"
          breakpoints={[
            { maxWidth: "48rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
          {modelcourselist.map((modelcourse, index) => (
            <Card key={index} shadow="xs">
              <Card.Section>
                <Image
                  src={modelcourse.modelCourse.modelCourseImages[0]?.src || "//dummyImage.svg"}
                  fit="cover"
                  alt="サンプル画像"
                  height={160}
                />
              </Card.Section>
              <Stack spacing="xs">
                <Flex gap="xs" justify="space-between" align="flex-start" direction="row" wrap="wrap">
                  <Text fw={500} size={18} mt={10} w={"80%"} truncate>
                    {modelcourse.modelCourse.title}
                  </Text>
                  <ActionIcon onClick={() => toggleLiked(index)} mt={14}>
                    <IconHeart
                      size="1.8rem"
                      color={liked[index] ? "red" : "#9999"}
                      style={{ fill: liked[index] ? "red" : "#9999" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Flex>

                <Text size={12}>{modelcourse.modelCourse.description}</Text>
                <Flex justify="space-between">
                  <Group spacing="xs">
                    <IconClockFilled />
                    <Text size={13}> 約{modelcourse.modelCourse.requiredMinute}分</Text>
                  </Group>
                  <Link href={`modelcourse/${modelcourse.modelCourse.id}`}>
                    <Button size="xs" variant="outline" color="cyan">
                      詳細
                    </Button>
                  </Link>
                </Flex>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Tabs.Panel>
  );
};
