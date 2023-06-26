import React, { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { SpotList, SpotInfoWindowState, MapHeight } from "@/atoms/SpotAtoms";

import { Card, Image, Text, Button, Group, Input } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconAt, IconArrowBigDown, IconArrowBigUp } from "@tabler/icons-react";

import { useDebounce } from "../_hooks/useDebounce";

import { SpotInfoWindow } from "./SpotInfoWindow";
import Link from "next/link";

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

export const SpotButton = (props: any) => {
  const spotList = useRecoilValue(SpotList); // 観光地データマスター
  const [tempSpotList, setTempSpotList] = useState(spotList); // 検索後観光地データ
  const setSpotInfoWindow = useSetRecoilState(SpotInfoWindowState);

  const [open, setOpen] = useState(false);
  const [mapHeight, setMapHeight] = useRecoilState(MapHeight);
  const [value, toggle] = useToggle([<IconArrowBigUp key={1} />, <IconArrowBigDown key={2} />]);

  const infoOption = {
    pixelOffset: props.offsetSize,
  };

  const showInfoWindow = (spot: OfficialSpotOverview) => {
    setSpotInfoWindow(<SpotInfoWindow spot={spot} infoOption={infoOption} />);
    setMapHeight(40);
    setOpen(false);
  };

  const toggleOpen = () => {
    if (!open) {
      setMapHeight(0);
      setOpen(true);
    } else {
      setMapHeight(40);
      setOpen(false);
    }
    toggle();
  };

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

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "500px",
        margin: "0 auto",
        marginTop: "5px",
        paddingBottom: "5.5rem",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: `${mapHeight}vh`,
          padding: " 30px 20px 10px 20px",
          backgroundColor: "#FFFFFF",
          zIndex: "100",
          transitionProperty: "top",
          transitionDuration: "0.3s",
        }}
      >
        <button
          onClick={toggleOpen}
          style={{
            display: "block",
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translate(-50%, 0%)",
            height: "24px",
            backgroundColor: "#FFFFFF",
            border: "none",
          }}
        >
          {value}
        </button>
        <Input icon={<IconAt />} placeholder="観光地検索" onChange={handleChange} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "10px 20px",
        }}
      >
        {tempSpotList.map((val, i) => {
          return (
            <Card shadow="sm" padding="sm" radius="md" withBorder key={i} onClick={() => showInfoWindow(val)}>
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

              <Group position="apart">
                <Button variant="light" color="pink" mt="md" radius="md" onClick={() => console.log("お気に入り")}>
                  お気に入り
                </Button>
                <Link href={`tourismspot/${i}`}>
                  <Button variant="light" color="blue" mt="md" radius="md">
                    詳細
                  </Button>
                </Link>
              </Group>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
