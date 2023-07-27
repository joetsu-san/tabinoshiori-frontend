"use client";

import { Button, Container, FileInput, Flex, Modal, NumberInput, Text, TextInput, Textarea } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconArrowBackUp } from "@tabler/icons-react";
import { NextPage, NextPageContext } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { z } from "zod";
import { File } from "buffer";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { managementClient } from "../../_aspida/managementAspida";
import { UpdateOfficialSpotDto } from "@/@types";
import { useOfficialSpot } from "../../_hooks/useOfficialSpot";
import axios from "axios";

type PageProps = {
  params: {
    official_spot_id: string;
  };
};

const OfficialSpotEdit: NextPage<PageProps> = ({ params }, ctx: NextPageContext) => {
  const [opened, { open, close }] = useDisclosure(false);

  const { data, error } = useOfficialSpot(params.official_spot_id);

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
    const officialSpotData: UpdateOfficialSpotDto = {
      title: value.title,
      ruby: value.ruby,
      description: value.description,
      address: value.address,
      latitude: value.latitude,
      longitude: value.longitude,
      officialSpotStatusId: 1,
    };
    await managementClient.management.official_spot._official_spot_id(params.official_spot_id).$put({
      body: officialSpotData,
    });
    router.push("/management/official_spot");
  };

  // 画像更新
  const fileSubmit = async (value: { files: File[] }) => {
    const formData = new FormData();

    if (value.files) {
      for (let i = 0; i < value.files.length; i++) {
        const f = value.files[i];
        const newBlob = new Blob([await f.arrayBuffer()], { type: "image/jpeg" });
        formData.append("files", newBlob);
      }

      await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/management/official_spot/${params.official_spot_id}/image`,
        formData,
        { withCredentials: true }
      );
      router.push("/management/official_spot");
    }
  };

  // 削除
  const deleteSubmit = async () => {
    await managementClient.management.official_spot._official_spot_id(params.official_spot_id).$delete();
    router.push("/management/official_spot");
  };

  // データ取得中
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Container size={"lg"}>
        <Flex direction={"column"} align={"center"}>
          <Text size={"lg"} mt={20}>
            観光地編集
          </Text>
        </Flex>

        <Flex direction={"row"} justify={"space-between"} mb={20}>
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

        <form onSubmit={formFiles.onSubmit((value: any) => fileSubmit(value))}>
          <Flex direction={"column"} gap={20} mb={40}>
            <FileInput
              placeholder="画像を選択"
              label="観光地画像"
              accept=".jpg,.jpeg"
              multiple
              {...formFiles.getInputProps("files")}
            />
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
