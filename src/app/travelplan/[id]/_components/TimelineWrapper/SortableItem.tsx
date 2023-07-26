import React, { useCallback } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, Image, Flex, Text, Stack, createStyles, rem, Box, Button } from "@mantine/core";
import { IconGripVertical } from "@tabler/icons-react";
import { TravelPlanSpot } from "@/@types";
import { useDisclosure } from "@mantine/hooks";
import { UpdateTravelPlanModal } from "./UpdateTravelPlanModal/UpdateTravelPlanModal";

type Props = {
  item: TravelPlanSpot;
};
const useStyles = createStyles((theme) => ({
  item: {
    display: "flex",
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
    marginTop: "1rem",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm,
  },

  dragHandle: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
    paddingRight: theme.spacing.xs,
  },
}));

export const SortableItem = ({ item }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.travelPlanSpotId });
  const { classes, cx } = useStyles();

  const [opened, { open, close }] = useDisclosure();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // TODO: onClick doesn't work
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      open();
    },
    [open]
  );

  return (
    <Box onClick={handleClick}>
      <Card ref={setNodeRef} style={style} {...attributes} {...listeners} className={cx(classes.item)}>
        <Box className={classes.dragHandle}>
          <IconGripVertical size="1.05rem" stroke={1.5} />
        </Box>
        <Image
          m="0 10px 0 0"
          fit="cover"
          width={80}
          height={80}
          radius={5}
          src={item.officialSpotImages?.[0]?.src ?? "/dummyImage.svg"}
          alt="旅のしおり地点画像"
        />
        <Stack spacing="xs">
          <Text>{item.title}</Text>
          <Text size="xs">{item.comment}</Text>
        </Stack>
        <UpdateTravelPlanModal
          onClose={close}
          opened={opened}
          tourismSpotId={item.tourismSpotId}
          travelPlanSpotId={item.travelPlanSpotId}
          tourismSpotImage={item.officialSpotImages?.[0]?.src ?? "/dummyImage.svg"}
          comment={item.comment}
        />
      </Card>
    </Box>
  );
};
