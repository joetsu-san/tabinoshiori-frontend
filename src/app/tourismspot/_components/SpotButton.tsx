import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MapCenterState, SelectedSpotList, SpotInfoWindowState } from "@/atoms/SpotAtoms";

import { Marker, InfoWindow } from "@react-google-maps/api";

import { Card, Image, Text, Badge, Button, Group, Flex, Input } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

import { SpotInfoWindow } from "./SpotInfoWindow";

// スポット情報
type PositionItem = {
  id: string;
  label: string;
  lat: number;
  lng: number;
};

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

export const SpotButton = (props: any) => {
  const [spotList, setSpotList] = useRecoilState(SelectedSpotList);

  const [spotInfoWindow, setSpotInfoWindow] = useRecoilState(SpotInfoWindowState);

  const infoOption = {
    pixelOffset: props.offsetSize,
  };

  const showInfoWindow = (spot: OfficialSpotOverview) => {
    setSpotInfoWindow(<SpotInfoWindow spot={spot} infoOption={infoOption} />);
  };

  return (
    <div style={{ width: "360px", margin: "0 auto" }}>
      <Flex direction={{ base: "column" }} gap={{ base: "lg", sm: "lg" }} justify={{ sm: "center" }}>
        <div
          style={{
            position: "sticky",
            top: "40vh",
            paddingTop: "20px",
            backgroundColor: "#FFFFFF",
            zIndex: "999",
          }}
        >
          <Input icon={<IconAt />} placeholder="観光地検索" />
        </div>

        <Flex direction={{ base: "column" }} gap={{ base: "lg", sm: "lg" }} justify={{ sm: "center" }}>
          {spotList.map((val, i) => {
            return (
              <Card shadow="sm" padding="sm" radius="md" withBorder key={i} onClick={() => showInfoWindow(val)}>
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>

                <Text weight={500}>観光地名</Text>

                <Text size="sm" color="dimmed">
                  観光地概要
                </Text>

                <Group position="apart">
                  <Button variant="light" color="pink" mt="md" radius="md" onClick={() => console.log("お気に入り")}>
                    お気に入り
                  </Button>
                  <Button variant="light" color="blue" mt="md" radius="md" onClick={() => console.log("詳細")}>
                    詳細
                  </Button>
                </Group>
              </Card>
            );
          })}
        </Flex>
      </Flex>
    </div>
  );
};
