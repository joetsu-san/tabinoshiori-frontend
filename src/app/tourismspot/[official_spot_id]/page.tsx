"use client";

import { useParams } from "next/navigation";

import { IconHeart, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { useState } from "react";
import { Card, Container, Image, Text, ActionIcon, Flex, Group, Overlay } from "@mantine/core";

const TourismDetailDatas: TourismDetailData[] = [
  {
    officialSpotDetail: {
      id: "00000000-0000-0000-0000-000000000000",
      title: "皇居",
      description:
        "昭和47年に開館した上越市立総合博物館は、平成30年7月21日、高田城址公園（高田城跡）という立地を生かし、上越市立歴史博物館として再スタートしました。「越後の都」をテーマに、安土桃山時代以降の地域の歴史を解説する常設展示室を整備しました。春日山城・福島城・高田城の三城の変遷やその時代背景、その後の地域の発展の様子を学ぶことができます。内堀や本丸土塁を臨む１階ラウンジ、三重櫓や妙高山・米山を一望できる屋上展望デッキは無料でご利用いただけます。カフェコーナー・ミュージアムショップも、高田城址公園（高田城跡）の散策や高田の街歩き、上越市内歴史探訪への出発点やお休みどころとしてご利用いただけます。",
      address: "東京都千代田区千代田1番1号",
      latitude: 35.6838504,
      longitude: 139.7434664,
      ruby: "こうきょ",
      officialSpotStatus: {
        id: 1,
        title: "string",
      },
      officialSpotImages: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        },
      ],
    },
  },
];

type TourismDetailData = {
  officialSpotDetail: {
    id: string;
    title: string;
    description: string;
    address: string;
    latitude: number;
    longitude: number;
    ruby: string;
    officialSpotStatus: { id: number; title: string };
    officialSpotImages: { id: string; src: string }[];
  };
};

const OfficialSpotDetail = () => {
  const router = useParams();
  const spotId = router.official_spot_id;

  const [liked, setLiked] = useState<boolean>(true);

  return (
    <div>
      <Image
        src={TourismDetailDatas[0].officialSpotDetail.officialSpotImages[0].src}
        fit="cover"
        alt="観光地画像"
        height={300}
      />
      <Container size="xl" mt={15} style={{ position: "relative" }} pb="6rem">
        <Text size={10} pt="30">
          {TourismDetailDatas[0].officialSpotDetail.ruby}
        </Text>
        <Flex gap="xs" justify="space-between" align="flex-start" direction="row" wrap="wrap">
          <Group>
            <Text fw={600} size={18} mb={10}>
              {TourismDetailDatas[0].officialSpotDetail.title}
            </Text>
          </Group>
          <ActionIcon
            onClick={() => setLiked(!liked)}
            mb={15}
            variant="light"
            size="xxl"
            p={10}
            radius={50}
            style={{
              position: "absolute",
              top: "-2.5rem",
              right: "1rem",
              boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.1)",
              border: "solid 1px #dddd",
            }}
          >
            <IconHeart
              size="2rem"
              color={liked ? "red" : "#9999"}
              stroke={1.5}
              style={{ fill: liked ? "red" : "#9999" }}
            />
          </ActionIcon>
        </Flex>

        <Text size={12}>{TourismDetailDatas[0].officialSpotDetail.description}</Text>

        <Card p={0} h={300} mt={10} pt={30}>
          <Flex pb={10}>
            <Text
              fw={600}
              size={13}
              px={15}
              py={5}
              style={{
                color: "#15aabf",
                border: "1px solid #15aabf",
                display: "inline-block",
                borderRadius: "5px",
              }}
            >
              住所
            </Text>
            <Text fw={600} size={14} color={"#555555"} ml={10} mt={5}>
              {TourismDetailDatas[0].officialSpotDetail.address}
            </Text>
          </Flex>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203595.9883919925!2d138.1535143964451!3d37.12445829757502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff67612bb2da995%3A0x4f7fe4e9f38ac675!2z5paw5r2f55yM5LiK6LaK5biC!5e0!3m2!1sja!2sjp!4v1686749502221!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 5 }}
            loading="lazy"
          ></iframe>
        </Card>
      </Container>
    </div>
  );
};

export default OfficialSpotDetail;
