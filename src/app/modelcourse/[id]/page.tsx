"use client";

import { MapCenterState, MapHeight } from "@/atoms/SpotAtoms";
import { modelcoursedetail } from "@/mock/mockdata";
import { Box, Card, Container, Text, Image, Group, Flex, ActionIcon, Stack, Timeline, Badge } from "@mantine/core";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { IconClockFilled, IconFlipFlops, IconHeart, IconWalk } from "@tabler/icons-react";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const ModelCourseDetail = ({ params }: { params: { id: string } }) => {
  const title: string = "詳細ページ";
  const param: string = String(params.id);
  console.log("ページ番号：" + param);
  const sampleImage: string =
    "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80";
  const courseSize = 80;
  const containerStyle = {
    height: "100%",
    width: "100%",
  };
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const [mapCenter, setMapCenter] = useRecoilState(MapCenterState);
  const [zoom, setZoom] = useState(9);
  const mapHeight = useRecoilValue(MapHeight);
  const keys: string = "";
  const [like, setLike] = useState(false);
  const [actives, setActives] = useState(0);
  const likes = () => {
    setLike(!like);
  };
  const courseActive = (e: React.MouseEvent) => {
    setZoom(15);
    setActives(Number(e.currentTarget.id));
    setMapCenter({
      ...mapCenter,
      lat: modelcoursedetail.modelCourseSpots[Number(e.currentTarget.id)].latitude,
      lng: modelcoursedetail.modelCourseSpots[Number(e.currentTarget.id)].longitude,
    });
    console.log(modelcoursedetail.modelCourseSpots[Number(e.currentTarget.id)].latitude);
    console.log(modelcoursedetail.modelCourseSpots[Number(e.currentTarget.id)].longitude);
  };
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };
  return (
    <Container>
      <Box>
        <Card p={0} h={300} m="10px 0 0 0">
          <LoadScript googleMapsApiKey={keys} onLoad={() => createOffsetSize()}>
            <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={zoom} clickableIcons={false}>
              {modelcoursedetail.modelCourseSpots.map((markers, index) => (
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

        <Card shadow="sm" m="10px 0 0 0" h="auto">
          <Flex align="center" justify="center" direction="row">
            <Card.Section>
              <Image
                id={"" + modelcoursedetail.id}
                fit="cover"
                radius={5}
                width={100}
                height={100}
                src={sampleImage}
                //src={modelcoursedetail.modelCourseSpots[0].officialSpotImages[0].src}
                alt="サンプル画像"
              />
            </Card.Section>
            <Stack w="60%" m="0 0 0 10%" h="auto" spacing="5px">
              <Text size={17} weight={500}>
                {modelcoursedetail.title}
              </Text>
              <Text size={13}>{modelcoursedetail.description}</Text>
              <Flex justify="center">
                <Group>
                  <IconClockFilled size={17} style={{ margin: "0 -10px 0 0" }} />
                  <Text size={13}>総時間：{modelcoursedetail.requiredMinute}時間</Text>
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
              {modelcoursedetail.modelCourseSpots.map((course, index) => (
                <Timeline.Item
                  id={"" + index}
                  key={index}
                  bullet={
                    <Group>
                      <IconFlipFlops size={12} />
                    </Group>
                  }
                  title={"" + course.officialSpotTitle}
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
                      src={course.officialSpotImages[0].src}
                      alt="サンプルコースイメージ"
                    />
                    <Stack spacing="xs">
                      <Text size="sm">{course.description}</Text>
                      <Group spacing={10}>
                        <Text size="xs">滞在時間：{course.stayMinutes}分</Text>
                      </Group>
                    </Stack>
                  </Flex>
                  <Badge variant="outline" w="fit-content" h="auto" m="25px 0 0 0" p={5}>
                    <Flex align="center">
                      <IconWalk size={20} />
                      <Text>次のエリアまで徒歩{course.stayMinutes}分</Text>
                    </Flex>
                  </Badge>
                </Timeline.Item>
              ))}
            </Timeline>
          </Group>
        </Card>
      </Box>
    </Container>
  );
};

export default ModelCourseDetail;
