import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, Image, Text, Stack, createStyles, rem, Selectors, DefaultProps } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import { IconGripVertical } from "@tabler/icons-react";
import { TravelPlanSpot } from "@/@types";

// Mantineや内部のコンポーネントと関係しない、純粋なProps
export type SortableItemNativeProps = {
  item: TravelPlanSpot;
};

export type SortableItemStylesParams = {};

const useStyles = createStyles((theme, {}: SortableItemStylesParams) => ({
  root: {
    display: "flex",
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
  },

  dragHandle: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
    paddingRight: theme.spacing.xs,
  },
}));

export type SortableItemStylesNames = Selectors<typeof useStyles>;
export type SortableItemProps = DefaultProps<SortableItemStylesNames, SortableItemStylesParams> &
  SortableItemNativeProps;

export const SortableItem = (props: SortableItemProps) => {
  const { item, className, classNames, styles, unstyled } = props;
  const { classes, cx } = useStyles({}, { name: "SortableItem", classNames, styles, unstyled });
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
    id: item.travelPlanSpotId,
  });

  // Modal用
  // const [opened, { open, close }] = useDisclosure(false);

  const draggableRootStyle = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // TODO: カードを押したら、モーダルが開いて編集できるようにする
  return (
    <>
      {/* <Modal opened={opened} onClose={close} title="旅のしおりを共有する" centered>
        コンテンツ
      </Modal> */}
      <Card className={cx(className, classes.root)} style={draggableRootStyle} ref={setNodeRef}>
        <div className={classes.dragHandle} {...attributes} {...listeners} ref={setActivatorNodeRef}>
          <IconGripVertical size="1.05rem" stroke={1.5} />
        </div>

        <Image
          m="0 10px 0 0"
          fit="cover"
          width={80}
          height={80}
          radius={5}
          src={item.officialSpotImages?.[0].src}
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
