import { Card, Group, Badge, Button, Image, Text, Flex } from "@mantine/core";
import { TravelPlanOverview } from "@/@types";
import Link from "next/link";

type Props = {
  travelplan: TravelPlanOverview;
};

export const TravelPlanCard = (props: Props) => {
  const dummyImageSrc = "/dummyImage.svg";
  const { travelplan } = props;
  return (
    <Card shadow="sm" radius="md" withBorder w={"90%"} p={0} m={10}>
      <Link href={`/travelplan/${travelplan.collaborateId}`}>
        <Flex>
          <Image
            src={travelplan.thumbnail?.src || dummyImageSrc}
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
