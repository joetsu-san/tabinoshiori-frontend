import { useMemo, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { useTravelPlan } from "@/hooks/useTravelPlan";
import { TravelPlanSpot } from "@/@types";
import { createPortal } from "react-dom";
import { createStyles } from "@mantine/core";
import { useUpdateSortIndex } from "@/hooks/useUpdateSortIndex";

export type TimelineEditorProps = {
  travelPlanId: string;
};

const useStyles = createStyles({
  list: { width: "90vw", marginTop: "1rem" },
  listItem: {
    marginTop: "1rem",
    ":first-child": {
      marginTop: 0,
    },
  },
});

export const TimelineEditor = (props: TimelineEditorProps) => {
  const { travelPlanId } = props;
  const travelPlan = useTravelPlan(travelPlanId);
  const travelPlanSpots = travelPlan?.travelPlanSpots;
  const updateSortIndex = useUpdateSortIndex();

  const sortedSpots: TravelPlanSpot[] | undefined = useMemo(() => {
    if (travelPlanSpots == null) {
      return;
    }
    const sorted = [...travelPlanSpots].sort((a, b) => a.sortIndex - b.sortIndex);
    return sorted;
  }, [travelPlanSpots]);

  const [activeId, setActiveId] = useState<string | undefined>();
  const activeItem = useMemo(
    () => travelPlanSpots?.find((spot) => spot.travelPlanSpotId === activeId),
    [activeId, travelPlanSpots]
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over == null || active.id === over.id || sortedSpots == null) {
      return;
    }
    const activeId = `${active.id}`;
    const overId = `${over.id}`;

    const sortIndex = recalculateSortIndex(sortedSpots, activeId, overId);
    if (sortIndex == null) return;
    updateSortIndex(travelPlanId, activeId, sortIndex);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const { classes } = useStyles();

  // sortedSpotsが空の場合は編集画面を生成できない (本来はErrorをthrowするべき)
  // Hooksのルールにより、Hooksはこの行より上で呼び出さなければならない
  if (sortedSpots == null) return <></>;

  const items = sortedSpots.map((item) => item.travelPlanSpotId);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className={classes.list}>
          {sortedSpots.map((item) => (
            <SortableItem item={item} className={classes.listItem} key={item.travelPlanSpotId} />
          ))}
        </div>
      </SortableContext>
      {createPortal(<DragOverlay>{activeItem && <SortableItem item={activeItem} />}</DragOverlay>, document.body)}
    </DndContext>
  );
};

const recalculateSortIndex = (sortedSpots: TravelPlanSpot[], activeId: string, overId: string) => {
  //
  let activeItemIndex: number | undefined;
  for (let i = 0; i < sortedSpots.length; i++) {
    const spot = sortedSpots[i];
    if (spot.travelPlanSpotId === activeId) {
      activeItemIndex = i;
    }

    if (spot.travelPlanSpotId === overId) {
      return calculateMiddleSortIndex(sortedSpots, activeItemIndex, i);
    }
  }
};

const calculateMiddleSortIndex = (
  sortedSpots: TravelPlanSpot[],
  activeItemIndex: number | undefined,
  overItemIndex: number
): number => {
  if (activeItemIndex == null) {
    const smallerSortIndex = overItemIndex < 1 ? 0 : sortedSpots[overItemIndex - 1].sortIndex;
    const biggerSortIndex = sortedSpots[overItemIndex].sortIndex;
    return (smallerSortIndex + biggerSortIndex) / 2;
  } else if (overItemIndex === activeItemIndex) {
    return sortedSpots[overItemIndex].sortIndex;
  } else {
    const smallerSortIndex = sortedSpots[overItemIndex].sortIndex;
    const biggerSortIndex =
      overItemIndex + 1 < sortedSpots.length ? sortedSpots[overItemIndex + 1].sortIndex : smallerSortIndex + 1;
    return (smallerSortIndex + biggerSortIndex) / 2;
  }
};
