"use client";

import {
  Card,
  Image,
  Text,
  Button,
  Group,
  TextInput,
  Grid,
  Container,
  Textarea,
  FileInput,
  Flex,
  NumberInput,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconAt, IconArrowBigDown, IconArrowBigUp, IconArrowBackUp } from "@tabler/icons-react";
import Link from "next/link";

import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextPageContext } from "next";
import { redirectLogin } from "../../_functions/redirectLogin";

const RegisterSpot = (ctx: NextPageContext) => {
  redirectLogin(ctx);
  const router = useRouter();

  // バリデーションスキーマ
  const schema = z.object({
    title: z.string().min(1, { message: "観光地名が入力されていません" }),
    ruby: z.string().min(1, { message: "ルビが入力されていません" }),
    description: z.string().min(1, { message: "説明文が入力されていません" }),
    address: z.string().min(1, { message: "所在地が入力されていません" }),
    latitude: z.number().min(1, { message: "緯度が入力されていません" }),
    longitude: z.number().min(1, { message: "経度が入力されていません" }),
  });

  const form = useForm({
    initialValues: {
      title: "",
      ruby: "",
      description: "",
      address: "",
      latitude: 0,
      longitude: 0,
      files: [],
    },
    validate: zodResolver(schema),
  });

  // 送信処理
  const submitFiles = async (value: any) => {
    const images: string[] = [];
    for (let i = 0; i < value.files.length; i++) {
      const f = value.files[i];
      images.push(Buffer.from(await f.arrayBuffer()).toString("base64"));
    }

    const postData = {
      title: value.title,
      ruby: value.ruby,
      description: value.description,
      address: value.address,
      latitude: value.latitude,
      longitude: value.longitude,
      officialSpotStatusId: 1,
      officialSpotImages: images,
    };

    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/management/official_spot`, postData);
    router.replace("/management/official_spot");

    // console.log(postData);
  };

  return (
    <div>
      <Container size={"lg"}>
        <h2>観光地登録</h2>
        <Flex direction={"row"} justify={"space-between"}>
          <Link href={"/management/official_spot"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>
        </Flex>

        <form onSubmit={form.onSubmit((value) => submitFiles(value))}>
          <Flex direction={"column"} gap={20}>
            <TextInput placeholder="観光地名称" label="観光地名称" {...form.getInputProps("title")} />
            <TextInput placeholder="ルビ" label="ルビ" {...form.getInputProps("ruby")} />
            <Textarea placeholder="説明文" label="説明文" {...form.getInputProps("description")} />
            <TextInput placeholder="所在地" label="所在地" {...form.getInputProps("address")} />
            <NumberInput
              placeholder="緯度(latitude)"
              label="緯度(latitude)"
              precision={8}
              {...form.getInputProps("latitude")}
            />
            <NumberInput
              placeholder="経度(longitude)"
              label="経度(longitude)"
              precision={8}
              {...form.getInputProps("longitude")}
            />
            <FileInput placeholder="画像を選択" label="観光地画像" multiple {...form.getInputProps("files")} />

            <Button variant="filled" type="submit">
              登録
            </Button>
          </Flex>
        </form>
      </Container>
    </div>
  );
};

export default RegisterSpot;
