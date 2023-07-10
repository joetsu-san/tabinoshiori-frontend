import React from "react";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";
import { useRecoilState } from "recoil";
import { travelPlanTourismSpotListState } from "@/atoms";

const DndkitList = () => {
  const [travelPlanTourismSpotList, setTravelPlanTourismSpotList] = useRecoilState(travelPlanTourismSpotListState);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTravelPlanTourismSpotList((prev) => {
        const oldIndex = prev.findIndex((item) => item.sortIndex === active.id);
        const newIndex = prev.findIndex((item) => item.sortIndex === over.id);

        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={travelPlanTourismSpotList.map((item) => item.sortIndex)}
        strategy={verticalListSortingStrategy}
      >
        <div style={{ width: "90vw" }}>
          {travelPlanTourismSpotList.map((item) => (
            <SortableItem key={item.travelPlanSpotId} item={item} sortIndex={item.sortIndex} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DndkitList;
