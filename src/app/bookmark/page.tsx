"use client";

// import { Card, Image, Text, Badge, Button, Group, ActionIcon } from "@mantine/core";
import { IconHeart, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { useState } from 'react';
import { Container, Input, Box, Card, Image, Group, Text, Title, SimpleGrid, Stack,ActionIcon, Grid, Space } from "@mantine/core";
import { Tabs } from '@mantine/core';

const bookmarkdatas: Bookmarkdata[] = [
  {
    title: "上越市立歴史博物館",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    address: "新潟県上越市本城町7-7",
    description:
      "昭和47年に開館した上越市立総合博物館は、平成30年7月21日（土）、高田城址公園（高田城跡）という立地を生かし、上越市立歴史博物館として再スタートしました。「越後の都」をテーマに、安土桃山時代以降の地域を歴史を解説する常設展示室を整備しました。春日山城・福島城・高田城の三城の変遷やその時代背景、そしてその後の地域の発展の様子を学ぶことができます。内堀や本丸土塁に臨む１階ラウンジや三重櫓から妙高山・米山までを一望する屋上デッキへ無料でご入館いただけます。新装したカフェコーナー・ミュージアムショップも、高田城址公園（高田城跡）の散策や街歩き、上越市内歴史探訪への出発点やお休みどころとしてご利用いただけます。",
  },
  {
    title: "上越科学館",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    address: "新潟県上越市下門前446-2",
    description:
      "上越科学館は「人間の科学」「雪の科学」をテーマに、1984年に開館しました。常設展示エリアは「人類の進化」、「生命のふしぎ」、「からだのしくみ」、「健康に生きる」、「くらし、環境、エネルギー」、「雪のサイエンス」、「生命の進化と環境」、「チルドレンパーク」、「サイエンスプレイパーク」の９つのゾーンに分かれ、それぞれのテーマごとにわかりやすく展示しています。また、科学に対する興味、関心をより高め、広げるため、自然観察教室、サイエンスショー、青少年のための科学の祭典、発明工夫・模型・工作展、標本作品展など、様々な催しを開催しています。",
  },
];

type Bookmarkdata = {
  title: string;
  image: string;
  address: string;
  description: string;
};


const Bookmark = () => {

  const [liked, setLiked] = useState<boolean[]>(bookmarkdatas.map((_) => true));
  const toggleLiked = (index: number) => {
    setLiked(liked.map((bool, i) => i === index ? !bool : bool))
  };

  const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <>
    <Tabs value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List grow position="center">
        <Tabs.Tab value="first">観光地</Tabs.Tab>
        <Tabs.Tab value="second">モデルコース</Tabs.Tab>
      </Tabs.List>
      <Container size="xl" mt={30}>
        <Tabs.Panel value="first">
        <Box>
          <SimpleGrid
            cols={3}
            mt={20}
            spacing="md"
            breakpoints={[
              { maxWidth: "48rem", cols: 2, spacing: "sm" },
              { maxWidth: "36rem", cols: 1, spacing: "sm" },
            ]}
          >
            {bookmarkdatas.map((bookmarkdata, index) => (
              <Card shadow="sm" key={index}>
                <Card.Section>
                  <Image src={bookmarkdata.image} fit="cover" alt="サンプル画像" height={160} />
                </Card.Section>
                <Stack spacing="xs">
                  <Grid>
                  <Text fw={600} size={17} mt={18} ml={8}>
                    {bookmarkdata.title}
                  </Text>
                  <ActionIcon onClick={() => toggleLiked(index)} mt={17}>
                  <IconHeart size="1.2rem" color={liked[index] ? "red":"#9999"} stroke={1.5}/>
                  </ActionIcon>
                  </Grid>
                  <Grid my={3} ml={0.1}>
                  <IconMapPin size="1.2rem" strokeWidth={2} color={'#4047bf'}/>
                  <Text fw={500} size={14} color={"#555555"}>
                    {bookmarkdata.address}
                  </Text>
                  </Grid>
                  <Text size={12} lineClamp={3}>{bookmarkdata.description}</Text>
                </Stack>
                
              </Card>
            ))}
          </SimpleGrid>
        </Box>
        </Tabs.Panel>
        <Tabs.Panel value="second">
          モデルコース一覧
        </Tabs.Panel>
      </Container>
    </Tabs>

    </>
  )
};
export default Bookmark;
