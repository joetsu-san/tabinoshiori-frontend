import React, { useEffect, useMemo } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { useRecoilState } from "recoil";
import { travelPlanTourismSpotListState } from "@/atoms";
import { updateTravelPlanSpot } from "@/utils/updateTravelPlanSpot";
import { useSearchParams } from "next/navigation";
import { useTravelPlan } from "@/hooks/useTravelPlan";
import { TravelPlan } from "@/utils/subscribeRemoteTravelPlan";
import { TravelPlanSpot } from "@/@types";

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

  // const handleDragEnd = (event: { active: any; over: any }) => {
  //   const { active, over } = event;

  //   if (active.id !== over.id) {
  //     setTravelPlanTourismSpotList((prev) => {
  //       const oldIndex = prev.findIndex((item) => item.sortIndex === active.id);
  //       const newIndex = prev.findIndex((item) => item.sortIndex === over.id);

  //       return arrayMove(prev, oldIndex, newIndex);
  //     });
  //   }
  // };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over == null || active.id === over.id) {
      return;
    }

    // setTravelPlanTourismSpotList((prev) => {
    //   const oldIndex = prev.findIndex((item) => item.sortIndex === active.id);
    //   const newIndex = prev.findIndex((item) => item.sortIndex === over.id);

    //   const updatedList = [...prev];

    //   // Get the dragged item
    //   const draggedItem = updatedList[oldIndex];

    //   // Remove the dragged item from the list
    //   updatedList.splice(oldIndex, 1);

    //   // Calculate the middle index
    //   const middleIndex = (prev[newIndex].sortIndex + prev[newIndex + 1].sortIndex) / 2;

    //   // Set the sortIndex of the dragged item to the middle index
    //   draggedItem.sortIndex = middleIndex;

    //   // Insert the dragged item at the new index
    //   updatedList.splice(newIndex + 1, 0, draggedItem);

    //   updateTravelPlanSpot(travelPlanId!, draggedItem.travelPlanSpotId, {
    //     tourismSpotId: draggedItem.tourismSpotId,
    //     comment: draggedItem.comment,
    //     id: draggedItem.travelPlanSpotId,
    //     sortIndex: middleIndex,
    //     minuteSincePrevious: draggedItem.minuteSincePrevious,
    //   });

    //   return updatedList;
    // });
  };

  return sortedSpots == null ? (
    <></>
  ) : (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={sortedSpots.map((item) => item.sortIndex)} strategy={verticalListSortingStrategy}>
        <div style={{ width: "90vw" }}>
          {sortedSpots.map((item) => (
            <SortableItem key={item.travelPlanSpotId} item={item} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
