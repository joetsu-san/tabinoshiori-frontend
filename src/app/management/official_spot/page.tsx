"use client";

import Link from "next/link";
import { Card, Image, Text, Button, Grid, Container, Flex, Input } from "@mantine/core";
import { IconArrowBackUp, IconAt, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDebounce } from "@/app/tourismspot/_hooks/useDebounce";
import { OfficialSpot } from "../../../../api/@types";
import { useOfficialSpotList } from "../_hooks/useOfficialSpotList";

const OfficialSpotPage = () => {
  const { data, error } = useOfficialSpotList();

  // 観光地検索用配列
  const [spotList, setSpotList] = useState<OfficialSpot[]>([]);

  // 検索 Debounce
  const [inputText, setInputText] = useState("");
  const debouncedInputText = useDebounce(inputText, 500);
  const handleChange = (event: any) => setInputText(event.target.value);

  // 検索用
  useEffect(() => {
    // 観光地検索処理
    if (debouncedInputText != "") {
      const temp = spotList.filter((spot) => spot.title.match(debouncedInputText));
      setSpotList(temp);
    } else {
      if (data) setSpotList(data);
    }
  }, [debouncedInputText]);

  // データ取得用
  useEffect(() => {
    if (data) setSpotList(data);
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Container size={"xl"} mb={"2rem"}>
        <Flex direction={"column"} align={"center"}>
          <Text size={"lg"} mt={20}>
            観光地一覧
          </Text>
        </Flex>
        <Flex direction={"row"} justify={"space-between"} mb={20}>
          <Link href={"/management"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>

          <Link href={"/management/official_spot/register"}>
            <Button variant="filled" leftIcon={<IconPlus />}>
              観光地追加
            </Button>
          </Link>
        </Flex>

        <Input icon={<IconAt />} placeholder="観光地検索" onChange={handleChange} mb={20} />
        <Grid>
          {spotList.map((val, i) => {
            return (
              <Grid.Col key={i} md={6} lg={3}>
                <Link href={`/management/official_spot/${val.id}`}>
                  <Card shadow="sm" padding="sm" radius="md" withBorder key={i}>
                    <Card.Section>
                      <Image
                        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        height={160}
                        alt="Norway"
                      />
                    </Card.Section>

                    <Text weight={500}>{val.title}</Text>

                    <Text size="sm" color="dimmed">
                      観光地概要
                    </Text>
                  </Card>
                </Link>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default OfficialSpotPage;
