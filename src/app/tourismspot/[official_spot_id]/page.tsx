"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { Card, Container, Image, Text, ActionIcon, Flex, Group, AspectRatio } from "@mantine/core";
import { IconHeart, IconMapPin } from "@tabler/icons-react";
import { useOfficialSpot } from "@/hooks/useOfficialSpot";
import { LoadingDisplay } from "@/components/LoadingDisplay";
import { useTourismspotBookmarkList } from "@/hooks/useTourismspotBookmarkList";
import { createTourismspotBookmark } from "@/utils/createTourismspotBookmark";
import { useRecoilValue } from "recoil";
import { firebaseTokenState } from "@/atoms";
import { deleteTourismspotBookmark } from "@/utils/deleteTourismspotBookmark";

const OfficialSpotDetail = () => {
  const router = useParams();
  const spotId = router.official_spot_id;
  const { data: tourismDetailDatas, error: tourismDetailDatasError } = useOfficialSpot(spotId);
  const { data: tourismspotBookmark, error: tourismspotBookmarkError } = useTourismspotBookmarkList();
  const [liked, setLiked] = useState<boolean>(false);
  const token = useRecoilValue(firebaseTokenState);

  const handleLike = useCallback(async () => {
    if (liked) {
      await deleteTourismspotBookmark(spotId, token!!);
    } else {
      await createTourismspotBookmark(spotId, token!!);
    }
    setLiked((prev) => !prev);
  }, [liked, spotId, token]);

  useEffect(() => {
    if (tourismspotBookmark) {
      setLiked(tourismspotBookmark.some((bookmark) => bookmark.officialSpotDetail.id === spotId));
    }
  }, [spotId, tourismspotBookmark]);

  if (!tourismDetailDatas) return <LoadingDisplay />;

  return (
    <div>
      <Image
        src={tourismDetailDatas.officialSpotImages[0]?.src || "/dummyImage.svg"}
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
            disabled={!token}
            onClick={handleLike}
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
          <AspectRatio ratio={16 / 16}>
            <iframe
              src={`https://maps.google.com/maps?output=embed&q=${tourismDetailDatas.title}&ll=${tourismDetailDatas.latitude},${tourismDetailDatas.longitude}&t=m&hl=ja&z=18`}
              title="Google map"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 5 }}
              loading="lazy"
              allowFullScreen
            />
          </AspectRatio>
        </Card>
      </Container>
    </div>
  );
};

export default OfficialSpotDetail;
