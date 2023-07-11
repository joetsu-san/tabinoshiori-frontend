"use client";

import {
  Button,
  Container,
  FileInput,
  Flex,
  Text,
  TextInput,
  Textarea,
  Timeline,
  ActionIcon,
  Modal,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowBackUp, IconPlus, IconTrash } from "@tabler/icons-react";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { AddSpotModal } from "./_components/AddSpotModal";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";

type PageProps = {
  params: {
    official_spot_id: number;
  };
};

const ModelCourseEdit: NextPage<PageProps> = ({ params }) => {
  const [modelCourseList, setModelCourseList] = useState<any[]>([]);
  const [viewList, setViewList] = useState<any[]>([]);

  const [opened, { open, close }] = useDisclosure(false);

  const router = useRouter();

  const schema = z.object({
    title: z.string().min(1, { message: "モデルコースタイトルを入力してください" }),
    description: z.string().min(1, { message: "モデルコース説明文を入力してください" }),
  });

  const formText = useForm({
    initialValues: {
      title: "",
      description: "",
      files: [],
    },
    validate: zodResolver(schema),
  });

  // 送信時アクション
  const submitData = async (value: any) => {
    console.log(value);

    let requireMinute = 0;
    modelCourseList.forEach((val) => (requireMinute += parseInt(val.stayMinute)));

    const images = [];
    for (let i = 0; i < value.files.length; i++) {
      const f = value.files[i];
      images.push(Buffer.from(await f.arrayBuffer()).toString("base64"));
    }

    const data = {
      title: value.title,
      description: value.description,
      requiredMinute: requireMinute,
      modelCourseImages: images,
      modelCourseSpot: modelCourseList,
    };

    console.log(data);

    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/management/model_course`, data);
    router.replace("/management/model_course");

    // console.log(data);
  };

  // 観光地削除アクション
  const deleteSpot = (index: number) => {
    const tempModelCourseList = [...modelCourseList];
    const tempViewList = [...viewList];
    tempModelCourseList.splice(index, 1);
    tempViewList.splice(index, 1);
    setModelCourseList(tempModelCourseList);
    setViewList(tempViewList);
  };

  return (
    <div>
      <Container size={"lg"}>
        <h2>モデルコース登録</h2>
        <Flex direction={"row"} justify={"space-between"}>
          <Link href={"/management/model_course"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>
        </Flex>

        <form onSubmit={formText.onSubmit((value) => submitData(value))}>
          <Flex direction={"column"} gap={20}>
            <TextInput placeholder="モデルコース名" label="モデルコース名" {...formText.getInputProps("title")} />
            <Textarea placeholder="説明文" label="モデルコースの説明" {...formText.getInputProps("description")} />
            <FileInput placeholder="画像を選択" label="観光地画像" multiple {...formText.getInputProps("files")} />

            <Timeline active={viewList.length - 1}>
              {viewList.map((val, i) => {
                return (
                  <Timeline.Item key={i}>
                    <Flex direction={"row"} align={"center"} justify={"space-between"}>
                      <div>
                        <Text weight={500}>{val.title}</Text>
                        <p>コメント：{val.comment}</p>
                        <p>滞在時間：{val.stayMinutes}分</p>
                      </div>
                      <ActionIcon variant="outline" onClick={() => deleteSpot(i)}>
                        <IconTrash />
                      </ActionIcon>
                    </Flex>
                  </Timeline.Item>
                );
              })}
            </Timeline>

            <Button variant="outline" type="button" leftIcon={<IconPlus />} onClick={open}>
              観光地追加
            </Button>

            <Button variant="filled" type="submit">
              登録
            </Button>
          </Flex>
        </form>

        <Modal opened={opened} onClose={close} title="観光地追加" size={"xl"}>
          <AddSpotModal
            modelCourseList={modelCourseList}
            setModelCourseList={setModelCourseList}
            viewList={viewList}
            setViewList={setViewList}
            closeAction={close}
          />
        </Modal>
      </Container>
    </div>
  );
};

export default ModelCourseEdit;

/**
  {
  "title": "モデルコースのタイトル",
  "description": "モデルコースの説明",
  "requiredMinute": 1,
  "modelCourseImages": "data:image/jpeg;base64,...",
  "modelCourseSpot": [
    {
      "officialSpotId": "00000000-0000-0000-0000-000000000000",
      "comment": "00000000-0000-0000-0000-000000000000",
      "sortIndex": 0,
      "stayMinute": 1,
      "minuteSincePrevious": 1
    }
  ]
}
 */

const modelcoursedetail = {
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
