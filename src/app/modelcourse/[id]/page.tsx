"use client";

import { Box, Card, Container, Text, Image, Group, Flex, ActionIcon, Stack, Timeline, Badge } from "@mantine/core";
import { IconClockFilled, IconFlipFlops, IconHeart, IconWalk } from "@tabler/icons-react";
import { useState } from "react";

const ModelCourseDetail = ({ params }: { params: { id: string } }) => {
  const title: string = "詳細ページ";
  const param: string = String(params.id);
  console.log("ページ番号：" + param);
  const sampleImage: string =
    "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80";
  const courseSize = 80;
  const modelCourseData = [
    {
      id: "1",
      title: "テストコース",
      description: "テストコース的なテストコースです。",
      requiredMinute: "5",
      ModelCourseImages: [
        {
          id: "1",
          src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  ];
  const courses = [
    {
      id: 1,
      title: "場所１",
      text: "店舗１で〇〇〇〇を食べる",
      stayTime: 20,
      minuteToNext: 3,
    },
    {
      id: 2,
      title: "場所２",
      text: "店舗１で〇〇〇〇を食べる",
      stayTime: 15,
      minuteToNext: 15,
    },
    {
      id: 3,
      title: "場所３",
      text: "店舗１で〇〇〇〇を食べる",
      stayTime: 25,
      minuteToNext: 10,
    },
    {
      id: 4,
      title: "場所４",
      text: "店舗１で〇〇〇〇を食べる",
      stayTime: 10,
      minuteToNext: 8,
    },
    {
      id: 5,
      title: "場所５",
      text: "店舗１で〇〇〇〇を食べる",
      stayTime: 30,
      minuteToNext: 5,
    },
  ];
  const sampleSpotData = [
    {
      id: "00000000-0000-0000-0000-000000000000",
      title: "皇居",
      ruby: "こうきょ",
      description: "明治天皇以降から現在までの天皇のおすまいです。",
      address: "東京都千代田区千代田1番1号",
      latitude: 35.6838504,
      longitude: 139.7434664,
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://example.com/image.jpg",
        },
      ],
      modelCourseId: "00000000-0000-0000-0000-000000000000",
      sortIndex: "0",
      minuteToNext: "1",
    },
    {
      id: "10000000-0000-0000-0000-000000000000",
      title: "皇居",
      ruby: "こうきょ",
      description: "明治天皇以降から現在までの天皇のおすまいです。",
      address: "東京都千代田区千代田1番1号",
      latitude: 35.6838504,
      longitude: 139.7434664,
      officialSpotImages: [
        {
          id: "10000000-0000-0000-0000-000000000000",
          src: "https://example.com/image.jpg",
        },
      ],
      modelCourseId: "10000000-0000-0000-0000-000000000000",
      sortIndex: "1",
      minuteToNext: "1",
    },
    {
      id: "20000000-0000-0000-0000-000000000000",
      title: "皇居",
      ruby: "こうきょ",
      description: "明治天皇以降から現在までの天皇のおすまいです。",
      address: "東京都千代田区千代田1番1号",
      latitude: 35.6838504,
      longitude: 139.7434664,
      officialSpotImages: [
        {
          id: "20000000-0000-0000-0000-000000000000",
          src: "https://example.com/image.jpg",
        },
      ],
      modelCourseId: "20000000-0000-0000-0000-000000000000",
      sortIndex: "2",
      minuteToNext: "1",
    },
    {
      id: "30000000-0000-0000-0000-000000000000",
      title: "皇居",
      ruby: "こうきょ",
      description: "明治天皇以降から現在までの天皇のおすまいです。",
      address: "東京都千代田区千代田1番1号",
      latitude: 35.6838504,
      longitude: 139.7434664,
      officialSpotImages: [
        {
          id: "30000000-0000-0000-0000-000000000000",
          src: "https://example.com/image.jpg",
        },
      ],
      modelCourseId: "30000000-0000-0000-0000-000000000000",
      sortIndex: "3",
      minuteToNext: "1",
    },
    {
      id: "40000000-0000-0000-0000-000000000000",
      title: "皇居",
      ruby: "こうきょ",
      description: "明治天皇以降から現在までの天皇のおすまいです。",
      address: "東京都千代田区千代田1番1号",
      latitude: 35.6838504,
      longitude: 139.7434664,
      officialSpotImages: [
        {
          id: "40000000-0000-0000-0000-000000000000",
          src: "https://example.com/image.jpg",
        },
      ],
      modelCourseId: "40000000-0000-0000-0000-000000000000",
      sortIndex: "4",
      minuteToNext: "1",
    },
  ];
  const [like, setLike] = useState(false);
  const [actives, setActives] = useState(0);
  const likes = () => {
    setLike(!like);
  };
  const courseActive = (e: React.MouseEvent) => {
    setActives(Number(e.currentTarget.id));
  };
  return (
    <Container>
      <Box>
        <Card p={0} h={300} m="10px 0 0 0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203595.9883919925!2d138.1535143964451!3d37.12445829757502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff67612bb2da995%3A0x4f7fe4e9f38ac675!2z5paw5r2f55yM5LiK6LaK5biC!5e0!3m2!1sja!2sjp!4v1686749502221!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Card>
        {modelCourseData.map((models, index) => (
          <Card shadow="sm" m="10px 0 0 0" h="auto" key={index}>
            <Flex align="center" justify="center" direction="row">
              <Card.Section>
                <Image
                  id={"" + models.ModelCourseImages[0].id}
                  fit="cover"
                  radius={5}
                  width={100}
                  height={100}
                  src={models.ModelCourseImages[0].src}
                  alt="サンプル画像"
                />
              </Card.Section>
              <Stack w="60%" m="0 0 0 10%" h="auto" spacing="5px">
                <Text size={17} weight={500}>
                  {models.title}
                </Text>
                <Text size={13}>{models.description}</Text>
                <Flex justify="center">
                  <Group>
                    <IconClockFilled size={17} style={{ margin: "0 -10px 0 0" }} />
                    <Text size={13}>総時間：{models.requiredMinute}時間</Text>
                  </Group>
                  <ActionIcon onClick={likes} m="0 0 0 auto">
                    <IconHeart color={like ? "red" : "gray"} style={{ fill: like ? "red" : "white" }} />
                  </ActionIcon>
                </Flex>
              </Stack>
            </Flex>
          </Card>
        ))}
        <Card m="10px 0 100px 0" shadow="sm">
          <Group w="fit-content" m="0 auto">
            <Timeline active={actives} bulletSize={24} lineWidth={2}>
              {courses.map((course, index) => (
                <Timeline.Item
                  id={"" + index}
                  key={index}
                  bullet={
                    <Group>
                      <IconFlipFlops size={12} />
                    </Group>
                  }
                  title={"" + course.title}
                  onClick={courseActive}
                >
                  <Flex align="center" m="20px 0 0 0">
                    <Image
                      id={"" + index}
                      key={index}
                      m="0 10px 0 0"
                      fit="cover"
                      width={courseSize}
                      height={courseSize}
                      radius={5}
                      src={sampleImage}
                      alt="サンプルコースイメージ"
                    />
                    <Group>
                      <Text color="dimmed" size="sm">
                        {course.text}
                      </Text>
                      <Group spacing={10}>
                        <Text size="xs">滞在時間：{course.stayTime}分</Text>
                      </Group>
                    </Group>
                  </Flex>
                  <Badge variant="outline" w="fit-content" h="auto" m="25px 0 0 0" p={5}>
                    <Flex align="center">
                      <IconWalk size={20} />
                      <Text>次のエリアまで徒歩{course.minuteToNext}分</Text>
                    </Flex>
                  </Badge>
                </Timeline.Item>
              ))}
            </Timeline>
          </Group>
        </Card>
      </Box>
    </Container>
  );
};

export default ModelCourseDetail;
