"use client";

import { useParams } from "next/navigation";

import { IconHeart, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { useState } from "react";
import { Container, Box, Card, Image, Text, SimpleGrid, Stack, ActionIcon, Grid, Flex } from "@mantine/core";

const bookmarkdata: Bookmarkdata = {
  title: "上越市立歴史博物館",
  image:
    "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
  address: "新潟県上越市本城町7-7",
  description:
    "昭和47年に開館した上越市立総合博物館は、平成30年7月21日（土）、高田城址公園（高田城跡）という立地を生かし、上越市立歴史博物館として再スタートしました。「越後の都」をテーマに、安土桃山時代以降の地域を歴史を解説する常設展示室を整備しました。春日山城・福島城・高田城の三城の変遷やその時代背景、そしてその後の地域の発展の様子を学ぶことができます。内堀や本丸土塁に臨む１階ラウンジや三重櫓から妙高山・米山までを一望する屋上デッキへ無料でご入館いただけます。新装したカフェコーナー・ミュージアムショップも、高田城址公園（高田城跡）の散策や街歩き、上越市内歴史探訪への出発点やお休みどころとしてご利用いただけます。",
};
type Bookmarkdata = {
  title: string;
  image: string;
  address: string;
  description: string;
};

const OfficialSpotDetail = () => {
  const router = useParams();
  const spotId = router.official_spot_id;

  const [liked, setLiked] = useState<boolean>(true);

  return (
    <div>
      <Image src={bookmarkdata.image} fit="cover" alt="サンプル画像" height={300} />
      <Container size="xl" mt={30}>
        <Flex gap="xs" justify="space-between" align="flex-start" direction="row" wrap="wrap">
          <Text fw={600} size={18} mb={15}>
            {bookmarkdata.title}
          </Text>

          <ActionIcon onClick={() => setLiked(!liked)} mb={15}>
            <IconHeart size="1.8rem" color={liked ? "red" : "#9999"} stroke={1.5} />
          </ActionIcon>
        </Flex>

        <Text fw={500} size={14} color={"#555555"} mb={15}>
          {bookmarkdata.address}
        </Text>

        <Text size={12} lineClamp={3}>
          {bookmarkdata.description}
        </Text>
      </Container>
    </div>
  );
};

export default OfficialSpotDetail;
