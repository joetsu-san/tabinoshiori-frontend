import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MapCenterState, SelectedSpotList, SpotInfoWindowState } from "@/atoms/SpotAtoms";

import { Marker, InfoWindow } from "@react-google-maps/api";

import { Card, Image, Text, Badge, Button, Group, Flex, Input } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

// スポット情報
type PositionItem = {
  id: string;
  label: string;
  lat: number;
  lng: number;
};

// infoWindowスタイル
const divStyle = {
  background: "white",
  fontSize: 16,
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

export const SpotButton = (props: any) => {
  const [spotList, setSpotList] = useRecoilState(SelectedSpotList);
  const setSpotInfo = useSetRecoilState(SpotInfoWindowState);
  const setMapCenter = useSetRecoilState(MapCenterState);

  const [spotInfoWindow, setSpotInfoWindow] = useRecoilState(SpotInfoWindowState);

  const infoOption = {
    pixelOffset: props.offsetSize,
  };

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

  const showInfoWindow = (spot: PositionItem) => {
    const LatLng = {
      lat: spot.lat,
      lng: spot.lng,
    };

    setSpotInfoWindow(
      <InfoWindow position={LatLng} onCloseClick={() => setSpotInfoWindow(undefined)} options={infoOption}>
        <div style={divStyle}>
          <h2>{spot.label}</h2>
          <p>観光地の説明</p>
          <p>概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要</p>
        </div>
      </InfoWindow>
    );
  };

  return (
    <Group position="center">
      <div
        style={{
          position: "sticky",
          top: "40vh",
          padding: "20px 20px 0 20px",
          backgroundColor: "#FFFFFF",
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
    </Group>
  );
};

// const SpotCard = () => {
//   return(
//     <Card shadow="sm" padding="lg" radius="md" withBorder>
//       <Flex
//         direction={{ base: 'column', sm: 'row' }}
//         gap={{ base: 'sm', sm: 'lg' }}
//         justify={{ sm: 'center' }}
//       >
//         {/* <Card.Section> */}
//           <Image
//             src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
//             height={160}
//             alt="Norway"
//           />
//         {/* </Card.Section> */}

//         <Text weight={500}>観光地名</Text>

//         <Text size="sm" color="dimmed">
//           観光地概要
//         </Text>

//         <Group position="apart" mt="md" mb="xs">
//           <Button variant="light" color="blue" mt="md" radius="md">
//             お気に入り
//           </Button>
//           <Button variant="light" color="blue" mt="md" radius="md">
//             ピンを立てる
//           </Button>
//         </Group>
//       </Flex>
//     </Card>
//   )
// }
