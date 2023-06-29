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
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowBackUp, IconPlus, IconTrash } from "@tabler/icons-react";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { AddSpotModal } from "./_components/AddSpotModal";

type PageProps = {
  params: {
    official_spot_id: number;
  };
};

const ModelCourseEdit: NextPage<PageProps> = ({ params }) => {
  const [modelCourseForm, setModelCourseForm] = useState<any[]>([]);

  const [opened, { open, close }] = useDisclosure(false);

  const formText = useForm({
    initialValues: {
      title: "",
      description: "",
    },
  });

  // 送信時アクション
  const submitData = (value: any) => {
    const data = {
      title: "",
      description: "",
      modelCourseSpot: modelCourseForm,
    };
    console.log(data);
  };

  // 観光地削除アクション
  const deleteSpot = (index: number) => {
    const tempList = [...modelCourseForm];
    tempList.splice(index, 1);
    setModelCourseForm(tempList);
  };

  return (
    <div>
      <p>モデルコース登録</p>

      <Link href={"/management/model_course"}>
        <Button variant="stable" leftIcon={<IconArrowBackUp />}>
          戻る
        </Button>
      </Link>

      <form onSubmit={formText.onSubmit((value) => submitData(value))}>
        <Container size={"lg"}>
          <Flex direction={"column"} gap={20}>
            <TextInput placeholder="モデルコース名" label="モデルコース名" {...formText.getInputProps("title")} />
            <Textarea placeholder="説明文" label="モデルコースの説明" {...formText.getInputProps("description")} />
            <FileInput placeholder="画像を選択" label="観光地画像" multiple {...formText.getInputProps("files")} />

            <Timeline active={modelCourseForm.length - 1}>
              {modelCourseForm.map((val, i) => {
                return (
                  <Timeline.Item key={i}>
                    <Flex direction={"row"} align={"center"} justify={"space-between"}>
                      <div>
                        <Text weight={500}>{val.selectSpot.title}</Text>
                        <p>コメント：{val.description}</p>
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

            <Modal opened={opened} onClose={close} title="観光地追加" size={"xl"}>
              <AddSpotModal modelCourseList={modelCourseForm} dispatch={setModelCourseForm} closeAction={close} />
            </Modal>

            <Button variant="outline" type="button" leftIcon={<IconPlus />} onClick={open}>
              観光地追加
            </Button>

            <Button variant="filled" type="submit">
              登録
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
