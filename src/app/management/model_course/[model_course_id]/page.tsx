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
  Modal,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
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
  const [opened, { open, close }] = useDisclosure(false);
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
    await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/management/model_course/${params.model_course_id}`,
      {
        title: value.title,
        description: value.description,
        requiredMinute: data.requiredMinute,
      },
      { withCredentials: true }
    );
    router.replace("/management/model_course");
    console.log("更新");
  };

  // 削除
  const deleteSubmit = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/management/model_course/${params.model_course_id}`, {
      withCredentials: true,
    });
    router.replace("/management/model_course");
    console.log("削除");
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

            <Button type="button" color="red" onClick={open}>
              削除
            </Button>
          </Flex>
        </form>

        <Modal opened={opened} onClose={close} title="モデルコース管理">
          <Flex direction={"column"} justify={"center"}>
            <Text>モデルコースを削除します</Text>
            <Flex direction={"row"} justify={"space-around"}>
              <Button onClick={close} variant="outline">
                キャンセル
              </Button>
              <Button onClick={deleteSubmit} color="red">
                削除
              </Button>
            </Flex>
          </Flex>
        </Modal>
      </Container>
    </div>
  );
};

export default ModelCourseEdit;
