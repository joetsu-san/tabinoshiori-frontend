import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { SpotList, SpotInfoWindowState, MapHeight } from "@/atoms/SpotAtoms";

import { Card, Image, Text, Button, Group, Input, Flex, rem, ActionIcon } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconArrowBigDown, IconArrowBigUp, IconHeart, IconMapPin, IconSearch } from "@tabler/icons-react";

import { useDebounce } from "../_hooks/useDebounce";

import { SpotInfoWindow } from "./SpotInfoWindow";
import Link from "next/link";
import { OfficialSpot } from "@/@types";
import { createTourismspotBookmark } from "@/utils/createTourismspotBookmark";
import { firebaseTokenState } from "@/atoms";
import { useTourismspotBookmarkList } from "@/hooks/useTourismspotBookmarkList";
import { deleteTourismspotBookmark } from "@/utils/deleteTourismspotBookmark";

export const SpotButton = (props: any) => {
  const spotList = useRecoilValue(SpotList); // 観光地データマスター
  const [tempSpotList, setTempSpotList] = useState<OfficialSpot[]>([]); // 検索後観光地データ
  const setSpotInfoWindow = useSetRecoilState(SpotInfoWindowState);

  const [open, setOpen] = useState(false);
  const [mapHeight, setMapHeight] = useRecoilState(MapHeight);
  const [value, toggle] = useToggle([<IconArrowBigUp key={1} />, <IconArrowBigDown key={2} />]);

  const token = useRecoilValue(firebaseTokenState); // ユーザートークン
  const { data: bookmarkList, error } = useTourismspotBookmarkList(); // ユーザーの観光地ブックマーク
  const [liked, setLiked] = useState<boolean[]>([]);

  const infoOption = {
    pixelOffset: props.offsetSize,
  };

  const showInfoWindow = (spot: OfficialSpot) => {
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
    if (spotList == null) return;
    // 観光地検索処理
    if (debouncedInputText != "") {
      const temp = spotList.filter((spot) => spot.title.match(debouncedInputText));
      setTempSpotList(temp);
    } else {
      setTempSpotList(spotList);
    }
  }, [debouncedInputText, setTempSpotList, spotList]);

  const handleBookmark = async (id: string) => {
    await createTourismspotBookmark(id, token!);
  };
  const handleRemoveBookmark = async (id: string) => {
    await deleteTourismspotBookmark(id, token!);
  };

  useEffect(() => {
    if (spotList != null)
      setLiked(spotList.map((spot) => bookmarkList?.some((v) => v.officialSpotDetail.id === spot.id)));
  }, [bookmarkList, spotList]);

  if (error) return <div>failed to load</div>;
  if (!bookmarkList) return <div>loading...</div>;
  if (!liked) return <div>loading...</div>;

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
        <Input
          placeholder="観光地検索"
          radius={20}
          icon={<IconSearch color="#eee" style={{ zIndex: 0 }} />}
          onChange={handleChange}
        />
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
                  src={val.officialSpotImages.length === 0 ? "/dummyImage.svg" : val.officialSpotImages[0].src}
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Text weight={500}>{val.title}</Text>

              <Group position="right">
                <ActionIcon
                  variant="light"
                  size="lg"
                  radius={50}
                  mt={"1rem"}
                  disabled={!token}
                  onClick={() => {
                    liked[i] ? handleRemoveBookmark(val.id) : handleBookmark(val.id);
                    setLiked((prev) => {
                      const temp = [...prev];
                      temp[i] = !temp[i];
                      return temp;
                    });
                  }}
                >
                  <IconHeart
                    size="2rem"
                    stroke={1.5}
                    style={{
                      fill: liked[i] ? "red" : "#9999",
                    }}
                    color={liked[i] ? "red" : "#9999"}
                  />
                </ActionIcon>
                <Link href={`tourismspot/${val.id}`}>
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
