"use client";

import { useParams } from "next/navigation";

import { IconHeart, IconMapPin } from "@tabler/icons-react";
import React, { use, useEffect } from "react";
import { useState } from "react";
import { Card, Container, Image, Text, ActionIcon, Flex, Group, Overlay, LoadingOverlay, Box } from "@mantine/core";
import { useOfficialSpot } from "@/hooks/useOfficialSpot";

const OfficialSpotDetail = () => {
  const router = useParams();
  const spotId = router.official_spot_id;
  const { data: tourismDetailDatas, error } = useOfficialSpot(spotId);
  console.log("tourismDetailDatas", tourismDetailDatas);

  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    console.log(tourismDetailDatas);
    console.log(error);
  }, [tourismDetailDatas, error]);

  // if (!router.isReady) {
  //   return <></>;
  // }

  if (!tourismDetailDatas)
    return (
      <Box h={"calc(100vh - 12rem)"} maw={400} pos="relative">
        <LoadingOverlay visible={!tourismDetailDatas} zIndex={1}></LoadingOverlay>
      </Box>
    );

  return (
    <div>
      <Image
        src={
          tourismDetailDatas.officialSpotImages.length === 0
            ? "/dummyImage.svg"
            : tourismDetailDatas.officialSpotImages[0].src
        }
        fit="cover"
        alt="観光地画像"
        height={300}
      />
      <Container size="xl" mt={15} style={{ position: "relative" }} pb="6rem">
        <Text size={10} pt="30">
          {tourismDetailDatas.ruby}
        </Text>
        <Flex gap="xs" justify="space-between" align="flex-start" direction="row" wrap="wrap">
          <Group>
            <Text fw={600} size={18} mb={10}>
              {tourismDetailDatas.title}
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

        <Text size={12}>{tourismDetailDatas.description}</Text>

        <Card p={0} h={300} mt={10} pt={30}>
          <Flex align="center">
            <IconMapPin size="1.1rem" strokeWidth={2} color={"#15aabf"} />
            <Text
              fw={600}
              size={15}
              style={{
                color: "#15aabf",
              }}
            >
              住所
            </Text>
          </Flex>
          <Text fw={500} size={14} color={"#555555"} mb={10}>
            {tourismDetailDatas.address}
          </Text>
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
