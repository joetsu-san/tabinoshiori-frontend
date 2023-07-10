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
  LoadingOverlay,
} from "@mantine/core";
import { IconHeart, IconMapPin } from "@tabler/icons-react";
import { useState } from "react";
import { useTourismspotBookmarkList } from "@/hooks/useTourismspotBookmarkList";

export const TourismSpotBookmark = () => {
  const { data: tourismspotlist, error } = useTourismspotBookmarkList();
  const [liked, setLiked] = useState<boolean[]>((tourismspotlist ?? Array()).map((_) => true));

  const toggleLiked = (index: number) => {
    setLiked(liked.map((bool, i) => (i === index ? !bool : bool)));
  };

  if (!tourismspotlist)
    return (
      <Tabs.Panel value="modelCourse">
        <Box h={"calc(100vh - 12rem)"} maw={400} pos="relative">
          <LoadingOverlay visible={!tourismspotlist} zIndex={1}></LoadingOverlay>
        </Box>
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
                    src={tourismspot.officialSpotDetail.officialSpotImages[0].src}
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
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Tabs.Panel>
      <Tabs.Panel value="second">モデルコース一覧</Tabs.Panel>
    </Container>
  );
};
