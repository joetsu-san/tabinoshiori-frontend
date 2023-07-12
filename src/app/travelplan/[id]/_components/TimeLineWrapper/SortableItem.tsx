import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, Image, Modal, Text, Stack, createStyles, rem } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import { IconGripVertical } from "@tabler/icons-react";
import { TravelPlanSpot } from "@/@types";

type Props = {
  item: TravelPlanSpot;
  sortIndex: number;
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

export const SortableItem = (props: Props) => {
  const { item, sortIndex } = props;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.sortIndex });
  const { classes, cx } = useStyles();

  // Modal用
  // const [opened, { open, close }] = useDisclosure(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      {/* TODO: カードを押したら、モーダルが開いて編集できるようにする
      <Modal opened={opened} onClose={close} title="旅のしおりを共有する" centered>
        コンテンツ
      </Modal> */}

      <Card ref={setNodeRef} style={style} {...attributes} {...listeners} className={cx(classes.item)}>
        <div className={classes.dragHandle}>
          <IconGripVertical size="1.05rem" stroke={1.5} />
        </div>

        <Image
          m="0 10px 0 0"
          fit="cover"
          width={80}
          height={80}
          radius={5}
          src={item.officialSpotImages[0].src}
          alt="トラベルプランアイテム画像"
        />
        <Stack spacing="xs">
          <Text>{item.title}</Text>
          <Text size="xs">{item.comment}</Text>
        </Stack>
      </Card>
    </>
  );
};
