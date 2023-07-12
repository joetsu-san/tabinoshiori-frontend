import { Card, Group, Badge, Button, Image, Text, Flex } from "@mantine/core";
import { TravelPlanDetail } from "../../../../api/@types";
import Link from "next/link";

type Props = {
  travelplan: TravelPlanDetail;
};

export const TravelPlanCard = (props: Props) => {
  const { travelplan } = props;
  return (
    <Card shadow="sm" radius="md" withBorder w={"90%"} p={0} m={10}>
      <Link href={`/travelplan/${travelplan.id}`}>
        <Flex>
          <Image
            src={travelplan.travelPlanSpots[0].travelPlanSpotInfo.officialSpotImages[0].src}
            height={80}
            width={80}
            // width={80}
            fit="cover"
            alt="Norway"
            radius="md"
            m="xs"
          />

          <Flex direction="column" mt="md" mb="xs" w={"70%"}>
            <Text weight={500} truncate>
              {travelplan.title}
            </Text>
            <Text size="sm" color="dimmed" truncate>
              {travelplan.description}
            </Text>
          </Flex>
        </Flex>

        {/* <Button variant="light" color="cyan" fullWidth radius="md">
        編集する
      </Button> */}
      </Link>
    </Card>
  );
};
