"use client";

import { Button, Container, FileInput, Flex, Input, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowBackUp, IconPlus } from "@tabler/icons-react";
import { NextPage } from "next";
import Link from "next/link";

type PageProps = {
  params: {
    official_spot_id: number;
  };
};

const OfficialSpotEdit: NextPage<PageProps> = ({ params }) => {
  const formText = useForm({
    initialValues: {
      title: "",
      ruby: "",
      description: "",
      address: "",
      latitude: "",
      longitude: "",
    },
  });

  const formFiles = useForm({
    initialValues: {
      files: [],
    },
  });

  return (
    <div>
      <p>観光地編集</p>

      {/* <h1>{params.official_spot_id}</h1> */}
      <Link href={"/management/official_spot"}>
        <Button variant="stable" leftIcon={<IconArrowBackUp />}>
          戻る
        </Button>
      </Link>

      <form onSubmit={formText.onSubmit((value) => console.log(value))}>
        <Container size={"lg"}>
          <Flex direction={"column"} gap={20}>
            <TextInput placeholder="観光地名称" label="観光地名称" {...formText.getInputProps("title")} />
            <TextInput placeholder="ルビ" label="ルビ" {...formText.getInputProps("ruby")} />
            <Textarea placeholder="説明文" label="説明文" {...formText.getInputProps("description")} />
            <TextInput placeholder="所在地" label="所在地" {...formText.getInputProps("address")} />
            <TextInput placeholder="緯度(latitude)" label="緯度(latitude)" {...formText.getInputProps("latitude")} />
            <TextInput placeholder="経度(longitude)" label="経度(longitude)" {...formText.getInputProps("longitude")} />

            <Button variant="filled" type="submit">
              登録
            </Button>
          </Flex>
        </Container>
      </form>

      <form onSubmit={formFiles.onSubmit((value) => console.log(value))}>
        <Container size={"lg"}>
          <Flex direction={"column"} gap={20}>
            <FileInput placeholder="画像を選択" label="観光地画像" multiple {...formFiles.getInputProps("files")} />

            <Button variant="filled" type="submit">
              登録
            </Button>
          </Flex>
        </Container>
      </form>
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
