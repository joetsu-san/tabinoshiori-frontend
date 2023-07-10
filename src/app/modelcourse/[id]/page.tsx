"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Card,
  Container,
  Text,
  Image,
  Group,
  Flex,
  ActionIcon,
  Stack,
  Timeline,
  Badge,
  Loader,
  Spoiler,
  Title,
} from "@mantine/core";
import { IconClockFilled, IconFlipFlops, IconHeart, IconWalk } from "@tabler/icons-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapCenterState } from "@/atoms/SpotAtoms";
import { useRecoilState } from "recoil";
import { useModelCourseDetail } from "@/hooks/useModelCourseDetail";

const ModelCourseDetail = ({ params }: { params: { id: string } }) => {
  //データ取得
  const { data, error } = useModelCourseDetail(params);
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const [mapCenter, setMapCenter] = useRecoilState(MapCenterState);
  const [zoom, setZoom] = useState(9);
  const [like, setLike] = useState(false);
  const [actives, setActives] = useState(0);
  const keys = process.env.NEXT_PUBLIC_MAP_KEY;
  const param = params.id;
  console.log("ページ番号：" + param);
  const courseSize = 100;
  const containerStyle = {
    height: "100%",
    width: "100%",
  };
  useEffect(() => {
    console.log(data);
    console.log(error);
  }, [data, error]);

  const likes = () => {
    setLike(!like);
  };
  const courseActive = (e: React.MouseEvent) => {
    if (!data) return;
    setZoom(15);
    setActives(Number(e.currentTarget.id));
    setMapCenter({
      ...mapCenter,
      lat: data.modelCourseSpots[Number(e.currentTarget.id)].latitude,
      lng: data.modelCourseSpots[Number(e.currentTarget.id)].longitude,
    });
  };
  const mapCourseCenter = () => {
    setZoom(9);
    setMapCenter({
      ...mapCenter,
      lat: 37.147976,
      lng: 138.236285,
    });
  };
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };
  return (
    <Container>
      {!data ? (
        <Flex align="center">
          <Loader size={75} color="#66D9E8" style={{ display: "block", margin: "200px auto 0 auto" }} />
        </Flex>
      ) : (
        <Box>
          <Card p={0} h={300} m="10px 0 0 0">
            <LoadScript googleMapsApiKey={String(keys)} onLoad={() => createOffsetSize()}>
              <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={zoom} clickableIcons={false}>
                {data.modelCourseSpots.map((markers, index) => (
                  <Marker
                    position={{
                      lat: markers.latitude,
                      lng: markers.longitude,
                    }}
                    key={index}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </Card>

          <Card shadow="sm" m="10px 0 0 0" h="auto" onClick={mapCourseCenter}>
            <Flex align="center" justify="center" direction="row">
              <Card.Section>
                <Image
                  id={"" + data.id}
                  fit="cover"
                  radius={5}
                  width={100}
                  height={100}
                  src={"" + data.modelCourseImages[0]}
                  alt="コース画像"
                />
              </Card.Section>
              <Stack w="60%" m="0 0 0 10%" h="auto" spacing="5px">
                <Text size={17} weight={500}>
                  {data.title}
                </Text>
                <Text size={13}>{data.description}</Text>
                <Flex justify="center">
                  <Group>
                    <IconClockFilled size={17} style={{ margin: "0 -10px 0 0" }} />
                    <Text size={13}>総時間：{data.requiredMinute}時間</Text>
                  </Group>
                  <ActionIcon onClick={likes} m="0 0 0 auto">
                    <IconHeart color={like ? "red" : "gray"} style={{ fill: like ? "red" : "white" }} />
                  </ActionIcon>
                </Flex>
              </Stack>
            </Flex>
          </Card>

          <Card m="10px 0 100px 0" shadow="sm">
            <Group w="fit-content" m="0 auto">
              <Timeline active={actives} bulletSize={24} lineWidth={2}>
                {data.modelCourseSpots.map((spot, index) => (
                  <Timeline.Item
                    id={"" + index}
                    key={index}
                    bullet={
                      <Group>
                        <IconFlipFlops size={12} />
                      </Group>
                    }
                    title={"" + spot.title}
                    onClick={courseActive}
                  >
                    <Flex align="center" m="20px 0 0 0">
                      <Image
                        id={"" + index}
                        key={index}
                        m="0 10px 0 0"
                        fit="cover"
                        width={courseSize}
                        height={courseSize}
                        radius={5}
                        src={"" + spot.officialSpotImages[0]} //course.officialSpotImages[0].src
                        alt="スポット画像"
                      />
                      <Stack spacing="xs">
                        <Text size="sm">{spot.title}</Text>
                        <Group spacing={10}>
                          <Text size="xs">滞在時間：{spot.stayMinute}分</Text>
                        </Group>
                      </Stack>
                    </Flex>
                    <Spoiler
                      maxHeight={0}
                      showLabel="詳細はこちら"
                      hideLabel="閉じる"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      style={{ margin: "5px 0" }}
                    >
                      <Box>
                        <Title variant="h3" size={15} weight={600}>
                          スポット情報
                        </Title>
                        <Text size="sm" m="5px 0">
                          {spot.description}
                        </Text>
                        <Title variant="h3" size={15} weight={600}>
                          住所
                        </Title>
                        <Text size="sm" m="5px 0 0 0">
                          {spot.address}
                        </Text>
                      </Box>
                    </Spoiler>

                    <Badge variant="outline" w="fit-content" h="auto" m="25px 0 0 0" p={5}>
                      <Flex align="center">
                        <IconWalk size={20} />
                        <Text>次のエリアまで徒歩{spot.minuteSincePrevious}分</Text>
                      </Flex>
                    </Badge>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Group>
          </Card>
        </Box>
      )}
    </Container>
  );
};

export default ModelCourseDetail;
