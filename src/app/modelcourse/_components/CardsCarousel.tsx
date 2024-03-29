import { useRef } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Box } from "@mantine/core";
import { ModelCourseOverview } from "@/@types";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  requiredMinute: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

type CardProps = {
  modelcourse: ModelCourseOverview;
};

const Card = ({ modelcourse }: CardProps) => {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${modelcourse.modelCourseImages[0]?.src || "/dummyImage.svg"})` }}
      className={classes.card}
    >
      <Box>
        <Text className={classes.requiredMinute} size="xs">
          {modelcourse.requiredMinute}分
        </Text>
        <Title order={3} className={classes.title} styles={{ textStroke: "1px #000" }}>
          {modelcourse.title}
        </Title>
      </Box>
      <Button variant="white" color="dark" component={Link} href={"/modelcourse/" + modelcourse.id}>
        詳細を見る
      </Button>
    </Paper>
  );
};

type CardsCarouselProps = {
  data: ModelCourseOverview[];
};

export const CardsCarousel = ({ data }: CardsCarouselProps) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((modelcourse) => (
    <Carousel.Slide key={modelcourse.id}>
      <Card modelcourse={modelcourse} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel>
  );
};
