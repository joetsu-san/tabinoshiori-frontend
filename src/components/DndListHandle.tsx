import { createStyles, rem, Text, Textarea, TextInput, Timeline } from "@mantine/core";
import { UseListStateHandlers } from "@mantine/hooks";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IconGripVertical } from "@tabler/icons-react";
import { TravelPlanSpot } from "@/@types";
import { useRecoilState } from "recoil";
import { travelPlanTourismSpotListState } from "@/atoms";
import { NextPage } from "next";
import { useEffect } from "react";
import Image from "next/image";
import { MappedTypeDescription } from "@syncedstore/core/types/doc";

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

interface Props {
  storeState: MappedTypeDescription<{
    arrayData: TravelPlanSpot[];
  }>;
  state: TravelPlanSpot[];
  handlers: UseListStateHandlers<TravelPlanSpot>;
}

const DndListHandle: NextPage<Props> = (props) => {
  const { storeState, state, handlers } = props;
  // const [travelPlanTourismSpotList, setTravelPlanTourismSpotList] = useRecoilState(travelPlanTourismSpotListState);
  // const [state, handlers] = useListState(data);
  const { classes, cx } = useStyles();

  useEffect(() => {
    console.log(state);
  }, [state]);

  const items = storeState.arrayData.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={item.id}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={classes.dragHandle}>
            <IconGripVertical size="1.05rem" stroke={1.5} />
          </div>
          <Image src={item.tourismSpots.officialSpotImages[0].src} height={90} width={60} alt={""} />
          <div>
            <Text>{item.tourismSpots.title}</Text>
            <Textarea
              color="dimmed"
              size="sm"
              defaultValue={item.comment}
              autosize
              maxRows={5}
              style={{ display: "block", height: "100%" }}
              onChange={(e) => {
                item.comment = e.currentTarget.value;
              }}
            />
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        handlers.reorder({ from: source.index, to: destination?.index || 0 });
        console.log(state);
      }}
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DndListHandle;
