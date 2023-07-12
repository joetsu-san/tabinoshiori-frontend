import {
  Container,
  Tabs,
  SimpleGrid,
  Card,
  Stack,
  Flex,
  ActionIcon,
  Grid,
  Box,
  Image,
  Text,
  Button,
} from "@mantine/core";
import { IconHeart, IconMapPin } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useTourismspotBookmarkList } from "@/hooks/useTourismspotBookmarkList";
import { LoadingDisplay } from "@/components/LoadingDisplay";
import { deleteTourismspotBookmark } from "@/utils/deleteTourismspotBookmark";
import { useRecoilValue } from "recoil";
import { firebaseTokenState } from "@/atoms";
import { createTourismspotBookmark } from "@/utils/createTourismspotBookmark";
import Link from "next/link";

export const TourismSpotBookmark = () => {
  const { data: tourismspotlist, error, mutate } = useTourismspotBookmarkList();
  const [liked, setLiked] = useState<boolean[]>((tourismspotlist ?? Array()).map((_) => true));
  const token = useRecoilValue(firebaseTokenState);

  const toggleLiked = (index: number) => {
    const spotId = tourismspotlist![index].officialSpotDetail.id;
    if (liked[index]) {
      deleteTourismspotBookmark(spotId, token!!);
    } else {
      createTourismspotBookmark(spotId, token!!);
    }
    setLiked(liked.map((bool, i) => (i === index ? !bool : bool)));
  };

  useEffect(() => {
    setLiked((tourismspotlist ?? Array()).map((_) => true));
  }, [tourismspotlist]);

  useEffect(() => {
    mutate();
  }, []);

  if (!tourismspotlist)
    return (
      <Tabs.Panel value="modelCourse">
        <LoadingDisplay />
      </Tabs.Panel>
    );

  return (
    <Container size="xl" mt={30}>
      <Tabs.Panel value="tourismSpot">
        <Box>
          <SimpleGrid
            cols={3}
            mt={20}
            pb={100}
            spacing="md"
            breakpoints={[
              { maxWidth: "48rem", cols: 2, spacing: "sm" },
              { maxWidth: "36rem", cols: 1, spacing: "sm" },
            ]}
          >
            {tourismspotlist.map((tourismspot, index) => (
              <Card shadow="xs" key={index}>
                <Card.Section>
                  <Image
                    src={tourismspot.officialSpotDetail.officialSpotImages[0]?.src || "/dummyImage.svg"}
                    fit="cover"
                    alt="サンプル画像"
                    height={160}
                  />
                </Card.Section>
                <Stack spacing="xs">
                  <Flex gap="xs" justify="space-between" align="flex-start" direction="row" wrap="wrap">
                    <Text fw={600} size={18} mt={15} ml={2}>
                      {tourismspot.officialSpotDetail.title}
                    </Text>

                    <ActionIcon onClick={() => toggleLiked(index)} mt={14}>
                      <IconHeart
                        size="1.8rem"
                        color={liked[index] ? "red" : "#9999"}
                        style={{ fill: liked[index] ? "red" : "#9999" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  </Flex>

                  <Grid ml={0.1}>
                    <IconMapPin size="1.2rem" strokeWidth={1.5} color={"#555555"} />
                    <Text fw={500} size={14} color={"#555555"} mb={10} ml={3}>
                      {tourismspot.officialSpotDetail.address}
                    </Text>
                  </Grid>
                  <Text size={12} lineClamp={3}>
                    {tourismspot.officialSpotDetail.description}
                  </Text>
                </Stack>
                <Flex justify="flex-end">
                  <Button size="xs" variant="outline" color="cyan" mt={10}>
                    <Link href={`/tourismspot/${tourismspot.officialSpotDetail.id}`}>詳細</Link>
                  </Button>
                </Flex>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Tabs.Panel>
      <Tabs.Panel value="second">モデルコース一覧</Tabs.Panel>
    </Container>
  );
};
