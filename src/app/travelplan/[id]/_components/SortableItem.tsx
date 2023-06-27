import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Card, Flex, Image, Modal, Paper, Textarea, createStyles, rem } from "@mantine/core";
import { TravelPlanSpot } from "../../../../../api/@types";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  item: TravelPlanSpot;
  sortIndex: number;
};
const useStyles = createStyles((theme) => ({
  item: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
    paddingLeft: `calc(${theme.spacing.xl} - ${theme.spacing.md})`, // to offset drag handle
    marginTop: "1rem",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm,
  },

  itemDragging: {
    boxShadow: theme.shadows.sm,
  },

  symbol: {
    // fontSize: rem(30),
    // fontWeight: 700,
    // width: rem(60),
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
  },

  dragHandle: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },
}));

export const SortableItem = (props: Props) => {
  const { item, sortIndex } = props;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.sortIndex });
  const { classes, cx } = useStyles();

  const [opened, { open, close }] = useDisclosure(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="旅のしおりを共有する" centered></Modal>
      <Card ref={setNodeRef} style={style} {...attributes} {...listeners} className={cx(classes.item)}>
        <Paper className={classes.dragHandle}></Paper>
        <Card.Section>
          <Image src={item.travelPlanSpotInfo.officialSpotImages[0].src} alt="" width={50} height={50} fit="cover" />
        </Card.Section>
        <Flex direction="column" justify="center" style={{ marginLeft: "1rem" }}>
          {item.travelPlanSpotInfo.title}
        </Flex>
      </Card>
    </>
  );
};
