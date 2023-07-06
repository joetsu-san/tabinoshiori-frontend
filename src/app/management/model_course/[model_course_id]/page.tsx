"use client";

import { client } from "@/hooks/useAspidaSWRImmutable";
import useAspidaSWR from "@aspida/swr";
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
import { useForm, zodResolver } from "@mantine/form";
import { IconArrowBackUp, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { z } from "zod";

type PageProps = {
  params: {
    model_course_id: string;
  };
};

const ModelCourseEdit: NextPage<PageProps> = ({ params }) => {
  const { data, error } = useAspidaSWR(client.model_course._model_course_id(params.model_course_id));

  const router = useRouter();

  const schema = z.object({
    title: z.string().min(1, { message: "モデルコースタイトルを入力してください" }),
    description: z.string().min(1, { message: "モデルコースの説明文を入力してください" }),
  });

  const formText = useForm({
    initialValues: {
      title: "",
      description: "",
    },
    validate: zodResolver(schema),
  });

  useEffect(() => {
    if (data) {
      formText.setValues({
        title: data.title,
        description: data.description,
      });
    }
  }, [data]);

  console.log(data);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // アップデート
  const updateModelCourse = async (value: any) => {
    // await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/management/model_course_id/${params.model_course_id}`,
    // {
    //   "title": value.title,
    //   "description": value.description,
    //   "requiredMinute": value.requiredMinute,
    // }
    // )
    // router.replace("/management/model_course_id")
    console.log("更新");
  };

  // "modelCourseImages": "data:image/jpeg;base64,..."

  return (
    <div>
      <Container size={"lg"}>
        <h2>モデルコース編集</h2>
        <Flex direction={"row"} justify={"space-between"}>
          <Link href={"/management/model_course"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>
        </Flex>

        <form onSubmit={formText.onSubmit((value) => updateModelCourse(value))}>
          <Flex direction={"column"} gap={20}>
            <TextInput placeholder="モデルコース" label="モデルコース" {...formText.getInputProps("title")} />
            <Textarea placeholder="説明文" label="モデルコースの説明" {...formText.getInputProps("description")} />
            <Button variant="filled" type="submit">
              更新
            </Button>

            <Timeline active={data.modelCourseSpots.length - 1}>
              {data.modelCourseSpots.map((val, i) => {
                return (
                  <Timeline.Item key={i}>
                    <Text weight={500}>{val.title}</Text>
                    <p>コメント：{val.comment}</p>
                    <p>滞在時間：{val.stayMinute}分</p>
                  </Timeline.Item>
                );
              })}
            </Timeline>

            <Button type="button" color="red" onClick={() => console.log("削除")}>
              削除
            </Button>
          </Flex>
        </form>
      </Container>
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
