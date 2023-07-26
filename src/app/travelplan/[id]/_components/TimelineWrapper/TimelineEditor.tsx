import React, { useMemo } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { useTravelPlan } from "@/hooks/useTravelPlan";
import { TravelPlanSpot } from "@/@types";
import { Box } from "@mantine/core";

export type TimelineEditorProps = {
  travelPlanId: string;
};

export const TimelineEditor = (props: TimelineEditorProps) => {
  const { travelPlanId } = props;
  const travelPlan = useTravelPlan(travelPlanId);
  const travelPlanSpots = travelPlan?.travelPlanSpots;

  const sortedSpots: TravelPlanSpot[] | undefined = useMemo(() => {
    if (travelPlanSpots == null) {
      return;
    }
    const sorted = [...travelPlanSpots].sort((a, b) => a.sortIndex - b.sortIndex);
    return sorted;
  }, [travelPlanSpots]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over == null || active.id === over.id) {
      return;
    }
  };

  return sortedSpots == null ? (
    <></>
  ) : (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={sortedSpots.map((item) => item.sortIndex)} strategy={verticalListSortingStrategy}>
        <Box w="90vw">
          {sortedSpots.map((item) => (
            <SortableItem key={item.travelPlanSpotId} item={item} />
          ))}
        </Box>
      </SortableContext>
    </DndContext>
  );
};
