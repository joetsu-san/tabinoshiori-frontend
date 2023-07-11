"use client";

import {
  Button,
  Container,
  FileInput,
  Flex,
  Input,
  Modal,
  NumberInput,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconArrowBackUp, IconPlus } from "@tabler/icons-react";
import { NextPage, NextPageContext } from "next";
import Link from "next/link";
import useAspidaSWR from "@aspida/swr";

import { client, useAspidaSWRImmutable } from "@/hooks/useAspidaSWRImmutable";
import { useEffect } from "react";
import { z } from "zod";
import { Buffer, File } from "buffer";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { redirectLogin } from "../../_functions/redirectLogin";

type PageProps = {
  params: {
    official_spot_id: string;
  };
};

const OfficialSpotEdit: NextPage<PageProps> = ({ params }, ctx: NextPageContext) => {
  redirectLogin(ctx);
  const [opened, { open, close }] = useDisclosure(false);

  // const {data, error} = useAspidaSWRImmutable(
  //   client.official_spot._official_spot_id(params.official_spot_id) ,
  //   {}
  //   );

  const { data, error } = useAspidaSWR(client.official_spot._official_spot_id(params.official_spot_id));

  const router = useRouter();

  const schema = z.object({
    title: z.string().min(1, { message: "観光地名が入力されていません" }),
    ruby: z.string().min(1, { message: "ルビが入力されていません" }),
    description: z.string().min(1, { message: "説明文が入力されていません" }),
    address: z.string().min(1, { message: "所在地が入力されていません" }),
    latitude: z.number().min(1, { message: "緯度が入力されていません" }),
    longitude: z.number().min(1, { message: "経度が入力されていません" }),
  });

  const formText = useForm({
    initialValues: {
      title: "",
      ruby: "",
      description: "",
      address: "",
      latitude: 0,
      longitude: 0,
    },
    validate: zodResolver(schema),
  });

  const formFiles = useForm();

  // テキストセット
  useEffect(() => {
    if (data) {
      formText.setValues({
        title: data.title,
        ruby: data.ruby,
        description: data.description,
        address: data.address,
        latitude: data.latitude,
        longitude: data.longitude,
      });
    }
  }, [data]);

  // アップデート
  const handleSubmit = async (value: any) => {
    await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/management/official_spot/${params.official_spot_id}`,
      {
        title: value.title,
        ruby: value.ruby,
        description: value.description,
        address: value.address,
        latitude: value.latitude,
        longitude: value.longitude,
        officialSpotStatusId: 1,
      },
      { withCredentials: true }
    );
    router.replace("/management/official_spot");
    console.log("更新");
  };

  // 画像更新
  const fileSubmit = async (value: any) => {
    const images = [];
    for (let i = 0; i < value.files.length; i++) {
      const f = value.files[i];
      images.push(await f.arrayBuffer());
    }
    await axios.put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/management/official_spot/${params.official_spot_id}/image`,
      { officialSpotImages: images },
      { withCredentials: true }
    );
    router.replace("/management/official_spot");
    console.log("画像更新");
  };

  // 削除
  const deleteSubmit = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/management/official_spot/${params.official_spot_id}`, {
      withCredentials: true,
    });
    router.replace("/management/official_spot");
    console.log("削除");
  };

  // データ取得中
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Container size={"lg"}>
        <h2>観光地編集</h2>
        <Flex direction={"row"} justify={"space-between"}>
          <Link href={"/management/official_spot"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>
        </Flex>

        <form onSubmit={formText.onSubmit((value) => handleSubmit(value))}>
          <Flex direction={"column"} gap={20} mb={30}>
            <TextInput placeholder="観光地名称" label="観光地名称" {...formText.getInputProps("title")} />
            <TextInput placeholder="ルビ" label="ルビ" {...formText.getInputProps("ruby")} />
            <Textarea placeholder="説明文" label="説明文" {...formText.getInputProps("description")} />
            <TextInput placeholder="所在地" label="所在地" {...formText.getInputProps("address")} />
            <NumberInput
              placeholder="緯度(latitude)"
              label="緯度(latitude)"
              precision={8}
              {...formText.getInputProps("latitude")}
            />
            <NumberInput
              placeholder="経度(longitude)"
              label="経度(longitude)"
              precision={8}
              {...formText.getInputProps("longitude")}
            />

            <Button variant="filled" type="submit">
              更新
            </Button>
          </Flex>
        </form>

        <form onSubmit={formFiles.onSubmit((value) => fileSubmit(value))}>
          <Flex direction={"column"} gap={20} mb={40}>
            <FileInput placeholder="画像を選択" label="観光地画像" multiple {...formFiles.getInputProps("files")} />
            <Button variant="filled" type="submit">
              画像更新
            </Button>
          </Flex>
        </form>

        <Modal opened={opened} onClose={close} title="観光地管理">
          <Flex direction={"column"} justify={"center"}>
            <Text>観光地を削除します</Text>
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

        <Flex direction={"row"} justify={"center"} mb={"6rem"}>
          <Button type="button" color="red" onClick={open}>
            削除
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default OfficialSpotEdit;

/**
 * POST    /management/official_spot
 * PUT     /management/official_spot/{official_spot_id}
 * DELETE  /management/official_spot/{official_spot_id}
 * PUT     /management/official_spot/{official_spot_id}/image
 * DELETE  /management/official_spot/{official_spot_id}/image/{image_id}
 */
