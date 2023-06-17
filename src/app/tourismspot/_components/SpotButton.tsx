import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MapCenterState, SelectedSpotList, SpotInfoWindowState } from "@/atoms/SpotAtoms";

// スポット情報
type PositionItem = {
  id: string;
  label: string;
  lat: number;
  lng: number;
};

// スポットダミーデータ
const positionData = [
  {
    id: "aaaa",
    label: "秋葉原",
    lat: 35.69731,
    lng: 139.7747,
  },
  {
    id: "bbbb",
    label: "岩本町",
    lat: 35.69397,
    lng: 139.7762,
  },
];

export const SpotButton = () => {
  const [spotList, setSpotList] = useRecoilState(SelectedSpotList);
  const setSpotInfo = useSetRecoilState(SpotInfoWindowState);
  const setMapCenter = useSetRecoilState(MapCenterState);

  const togglePosition = (positionItem: PositionItem) => {
    function findIndexById(array: PositionItem[], id: string) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id == id) return i; // IDが一致した場合、インデックスを返す
      }
      return -1; // IDが見つからなかった場合は-1を返す
    }

    if (findIndexById(spotList, positionItem.id) == -1) {
      console.log("追加");
      const newCenter = {
        lat: positionItem.lat,
        lng: positionItem.lng,
      };

      setSpotList([...spotList, positionItem]);
      setMapCenter(newCenter);
    } else {
      console.log("削除");
      setSpotList(spotList.filter((data) => data.id != positionItem.id));
      setSpotInfo(undefined);
    }
  };

  return (
    <div style={{ width: "365px", margin: "0 auto" }}>
      {positionData.map((val, i) => {
        return (
          // <div key={i}>
          //   <p>{val.label}</p>
          //   <button onClick={() => togglePosition(val)}>マップに表示</button>
          //   <SpotCard />
          // </div>

          <Card shadow="sm" padding="lg" radius="md" withBorder key={i}>
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

            <Group position="apart" mt="md" mb="xs">
              <Button variant="light" color="blue" mt="md" radius="md">
                お気に入り
              </Button>
              <Button variant="light" color="blue" mt="md" radius="md" onClick={() => togglePosition(val)}>
                ピンを立てる
              </Button>
            </Group>
          </Card>
        );
      })}
    </div>
  );
};

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const SpotCard = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
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

      <Group position="apart" mt="md" mb="xs">
        <Button variant="light" color="blue" mt="md" radius="md">
          お気に入り
        </Button>
        <Button variant="light" color="blue" mt="md" radius="md">
          ピンを立てる
        </Button>
      </Group>
    </Card>
  );
};
