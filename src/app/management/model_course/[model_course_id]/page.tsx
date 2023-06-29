"use client";

import {
  ActionIcon,
  Button,
  Container,
  FileInput,
  Flex,
  Input,
  TextInput,
  Textarea,
  Timeline,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowBackUp, IconTrash } from "@tabler/icons-react";
import { NextPage } from "next";
import Link from "next/link";

type PageProps = {
  params: {
    official_spot_id: number;
  };
};

const ModelCourseEdit: NextPage<PageProps> = ({ params }) => {
  const formText = useForm({
    initialValues: {
      title: modelcoursedetail.title,
      description: modelcoursedetail.description,
    },
  });

  // 更新アクション
  const updateModelCourse = (val: any) => {
    console.log(val);
  };

  return (
    <div>
      <p>モデルコース編集</p>

      <Link href={"/management/model_course"}>
        <Button variant="stable" leftIcon={<IconArrowBackUp />}>
          戻る
        </Button>
      </Link>

      <form onSubmit={formText.onSubmit((value) => updateModelCourse(value))}>
        <Container size={"lg"}>
          <Flex direction={"column"} gap={20}>
            <TextInput placeholder="モデルコース" label="モデルコース" {...formText.getInputProps("title")} />
            <Textarea placeholder="説明文" label="モデルコースの説明" {...formText.getInputProps("description")} />
            <Button variant="filled" type="submit">
              更新
            </Button>

            <Timeline active={modelcoursedetail.modelCourseSpots.length - 1}>
              {modelcoursedetail.modelCourseSpots.map((val, i) => {
                return (
                  <Timeline.Item key={i}>
                    <Text weight={500}>{val.officialSpotTitle}</Text>
                    <p>コメント：{val.description}</p>
                    <p>滞在時間：{val.stayMinutes}分</p>
                  </Timeline.Item>
                );
              })}
            </Timeline>

            <Button type="button" color="red" onClick={() => console.log("削除")}>
              削除
            </Button>
          </Flex>
        </Container>
      </form>
    </div>
  );
};

export default ModelCourseEdit;

export const modelcoursedetail = {
  id: "00000000-0000-0000-0000-000000000000",
  title: "モデルコースのタイトル",
  description: "モデルコースの説明",
  requiredMinute: 1,
  modelCourseSpots: [
    {
      officialSpotId: "00000000-0000-0000-0000-000000000000",
      modelCourseId: "00000000-0000-0000-0000-000000000000",
      sortIndex: 0,
      minuteSincePrevious: 1,
      officialSpotTitle: "皇居",
      officialSpotRuby: "こうきょ",
      officialSpotDescription: "明治天皇以降から現在までの天皇のおすまいです。",
      address: "東京都千代田区千代田1番1号",
      latitude: 35.6838504,
      longitude: 139.7434664,
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://example.com/image.jpg",
        },
      ],
      description: "店舗１で〇〇〇〇を食べる",
      stayMinutes: 15,
    },
    {
      officialSpotId: "10000000-0000-0000-0000-000000000000",
      modelCourseId: "00000000-0000-0000-0000-000000000000",
      sortIndex: 0,
      minuteSincePrevious: 1,
      officialSpotTitle: "皇居",
      officialSpotRuby: "こうきょ",
      officialSpotDescription: "明治天皇以降から現在までの天皇のおすまいです。",
      address: "東京都千代田区千代田1番1号",
      latitude: 35.69397,
      longitude: 139.7762,
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://example.com/image.jpg",
        },
      ],
      description: "店舗１で〇〇〇〇を食べる",
      stayMinutes: 15,
    },
    {
      officialSpotId: "20000000-0000-0000-0000-000000000000",
      modelCourseId: "00000000-0000-0000-0000-000000000000",
      sortIndex: 0,
      minuteSincePrevious: 1,
      officialSpotTitle: "皇居",
      officialSpotRuby: "こうきょ",
      officialSpotDescription: "明治天皇以降から現在までの天皇のおすまいです。",
      address: "東京都千代田区千代田1番1号",
      latitude: 37.147887,
      longitude: 138.2337322,
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://example.com/image.jpg",
        },
      ],
      description: "店舗１で〇〇〇〇を食べる",
      stayMinutes: 15,
    },
  ],
};
