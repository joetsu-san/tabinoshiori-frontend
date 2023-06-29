"use client";

import { useDebounce } from "@/app/tourismspot/_hooks/useDebounce";
import { SpotList } from "@/atoms/SpotAtoms";
import {
  Button,
  Container,
  FileInput,
  Flex,
  Image,
  Text,
  TextInput,
  Textarea,
  NumberInput,
  Card,
  Input,
  Grid,
  Timeline,
  Group,
  ActionIcon,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowBackUp, IconPlus, IconTrash } from "@tabler/icons-react";
import { NextPage } from "next";
import Link from "next/link";
import { CSSProperties, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

type PageProps = {
  params: {
    official_spot_id: number;
  };
};

const ModelCourseEdit: NextPage<PageProps> = ({ params }) => {
  const [modelCourseForm, setModelCourseForm] = useState<any[]>([]);
  const [addSpot, setAddSpot] = useState<any>(undefined);

  const formText = useForm({
    initialValues: {
      title: "",
      description: "",
    },
  });

  const addSpotModal = (dispatch: Dispatch<SetStateAction<any[]>>) => {
    const overlay: CSSProperties = {
      position: "fixed",
      top: "0",
      left: "0",
      display: "grid",
      placeContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    };

    const modal: CSSProperties = {
      width: "80vh",
      height: "80vh",
      padding: "20px",
      backgroundColor: "#ffffff",
    };

    const AddSpotModal = () => {
      const spotList = useRecoilValue(SpotList); // 観光地データマスター
      const [tempSpotList, setTempSpotList] = useState(spotList); // 検索後観光地データ

      const [selectedSpot, setSelectedSpot] = useState<any>({});

      // 検索 Debounce
      const [inputText, setInputText] = useState("");
      const debouncedInputText = useDebounce(inputText, 500);
      const handleChange = (event: any) => setInputText(event.target.value);
      useEffect(() => {
        console.log(`「${debouncedInputText}」`);
        // 観光地検索処理
        if (debouncedInputText != "") {
          const temp = spotList.filter((spot) => spot.title.match(debouncedInputText));
          setTempSpotList(temp);
        } else {
          setTempSpotList(spotList);
        }
      }, [debouncedInputText, setTempSpotList, spotList]);

      const text = useForm({
        initialValues: {
          description: "",
          stayMinutes: 1,
        },
      });

      const selectSpot = (data: any) => {
        const spotData = {
          officialSpotId: data.id,
          title: data.title,
        };
        setSelectedSpot(spotData);
      };

      const setSpot = (formValues: any) => {
        const hoge = {
          description: formValues.description,
          stayMinutes: formValues.stayMinutes,
          selectSpot: selectedSpot,
        };
        console.log(hoge);

        dispatch([...modelCourseForm, hoge]);
        setAddSpot(undefined);
      };

      return (
        <div
          style={overlay}
          onClick={() => {
            setAddSpot(undefined);
          }}
        >
          <div style={modal} onClick={(e) => e.stopPropagation()}>
            <form onSubmit={text.onSubmit((value) => setSpot(value))}>
              <TextInput label="備考" {...text.getInputProps("description")} />
              <NumberInput label="滞在時間" {...text.getInputProps("stayMinutes")} />
              <div>
                <Input placeholder="観光地検索" onChange={handleChange} />
                <p>選択：{selectedSpot.title}</p>
                <Grid>
                  {tempSpotList.map((val, i) => {
                    return (
                      <Grid.Col key={i} md={6} lg={3}>
                        <Card shadow="sm" padding="sm" radius="md" withBorder onClick={() => selectSpot(val)}>
                          <Card.Section>
                            <Image
                              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                              height={160}
                              alt="Norway"
                            />
                          </Card.Section>

                          <Text weight={500}>{val.title}</Text>
                        </Card>
                      </Grid.Col>
                    );
                  })}
                </Grid>
              </div>
              <Button variant="filled" type="submit" leftIcon={<IconPlus />} onClick={addSpot}>
                追加
              </Button>
            </form>
          </div>
        </div>
      );
    };

    setAddSpot(<AddSpotModal />);
  };

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
      <p style={{}}>モデルコース登録</p>

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

            <Button
              variant="filled"
              type="button"
              leftIcon={<IconPlus />}
              onClick={() => addSpotModal(setModelCourseForm)}
            >
              観光地追加
            </Button>

            <Button variant="filled" type="submit">
              登録
            </Button>
          </Flex>
        </Container>
      </form>
      {addSpot}
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
