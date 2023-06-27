"use client";

import Link from "next/link";
import { Card, Image, Text, Button, Group, Input, Grid, Container } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconAt, IconArrowBigDown, IconArrowBigUp, IconArrowBackUp, IconPlus } from "@tabler/icons-react";

const buttonContainer = {
  display: "flex",
  flexDirection: "column",
};

const OfficialSpot = () => {
  return (
    <div>
      <p>観光地一覧</p>

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

      <Container size={"xl"}>
        <Grid>
          {positionData.map((val, i) => {
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

export default OfficialSpot;

// スポット情報
type OfficialSpotOverview = {
  id: string;
  title: string;
  ruby: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  officialSpotStatus: "open" | "close";
};

const positionData: OfficialSpotOverview[] = [
  {
    id: "aaaa",
    title: "秋葉原",
    ruby: "あきはばら",
    description: "",
    address: "",
    latitude: 35.69731,
    longitude: 139.7747,
    officialSpotStatus: "open",
  },
  {
    id: "bbbb",
    title: "岩本町",
    ruby: "いわもとちょう",
    description: "",
    address: "",
    latitude: 35.69397,
    longitude: 139.7762,
    officialSpotStatus: "open",
  },
  {
    id: "cccc",
    title: "上越市",
    ruby: "じょうえつし",
    description: "",
    address: "",
    latitude: 37.147976,
    longitude: 138.236285,
    officialSpotStatus: "open",
  },
];
