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
import { useRouter } from "next/navigation";
import { managementClient } from "../../_aspida/managementAspida";

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

    await managementClient.management.model_course.$post({
      body: data,
    });
    router.replace("/management/model_course");
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
        <Flex direction={"column"} align={"center"}>
          <Text size={"lg"} mt={20}>
            モデルコース登録
          </Text>
        </Flex>

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
