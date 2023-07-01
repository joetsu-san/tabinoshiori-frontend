"use client";

import { Card, Image, Text, Button, Group, TextInput, Grid, Container, Textarea, FileInput, Flex } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconAt, IconArrowBigDown, IconArrowBigUp, IconArrowBackUp } from "@tabler/icons-react";
import Link from "next/link";

import { useForm } from "@mantine/form";

const RegisterSpot = () => {
  const form = useForm({
    initialValues: {
      title: "",
      ruby: "",
      description: "",
      address: "",
      latitude: "",
      longitude: "",
      files: [],
    },
  });

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

        <form onSubmit={form.onSubmit((value) => console.log(value))}>
          <Flex direction={"column"} gap={20}>
            <TextInput placeholder="観光地名称" label="観光地名称" {...form.getInputProps("title")} />
            <TextInput placeholder="ルビ" label="ルビ" {...form.getInputProps("ruby")} />
            <Textarea placeholder="説明文" label="説明文" {...form.getInputProps("description")} />
            <TextInput placeholder="所在地" label="所在地" {...form.getInputProps("address")} />
            <TextInput placeholder="緯度(latitude)" label="緯度(latitude)" {...form.getInputProps("latitude")} />
            <TextInput placeholder="経度(longitude)" label="経度(longitude)" {...form.getInputProps("longitude")} />
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

/**
 * POST    /management/official_spot
 * {
    "title": "皇居",
    "ruby": "こうきょ",
    "description": "明治天皇以降から現在までの天皇のおすまいです。",
    "address": "東京都千代田区千代田1番1号",
    "latitude": 35.6838504,
    "longitude": 139.7434664,
    "officialSpotStatusId": 1,
    "officialSpotImages": "data:image/jpeg;base64,..."
  }
 */
