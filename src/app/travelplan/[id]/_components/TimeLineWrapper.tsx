"use client";
import { travelPlanTourismSpotCountState, travelPlanTourismSpotListState } from "@/atoms";
import { Timeline, Text, Button } from "@mantine/core";
import { useRecoilState } from "recoil";
import { TravelPlanSpot } from "../../../../../api/@types";
import DndListHandle from "@/components/DndListHandle";
import { useListState } from "@mantine/hooks";
import { relative } from "path";
import { MappedTypeDescription } from "@syncedstore/core/types/doc";
import { NextPage } from "next";
import { useSyncedStore } from "@syncedstore/react";
import { store } from "@/lib/store";
import DndkitList from "./DndkitList";
// import { randomUUID } from "crypto";

type Props = {
  // storeState: MappedTypeDescription<{ arrayData: TravelPlanSpot[] }>;
};

export const TimeLineWrapper: NextPage<Props> = (props) => {
  // const storeState = useSyncedStore(store);
  const [travelPlanTourismSpotList, setTravelPlanTourismSpotList] = useRecoilState(travelPlanTourismSpotListState);
  // const [travelPlanTourismSpotCount, setTravelPlanTourismSpotCount] = useRecoilState(travelPlanTourismSpotCountState);

  // const [state, handlers] = useListState(storeState.arrayData);

  const handleTourismSpotCount = () => {
    const travelPlanSpot: TravelPlanSpot = {
      travelPlanSpotInfo: {
        id: window.crypto.randomUUID(),
        title: "上越妙高駅",
        description: "string",
        address: "string",
        latitude: 31,
        longitude: 30,
        ruby: "じょうえつみょうこうえき",
        officialSpotStatus: {
          id: 1,
          title: "open",
        },
        officialSpotImages: [
          {
            id: window.crypto.randomUUID(),
            src: "https://picsum.photos/200/300",
          },
        ],
      },
      comment: "集合時間: 10:00",
      sortIndex: travelPlanTourismSpotList.length + 1,
      minuteSincePrevious: 15,
    };
    setTravelPlanTourismSpotList([...travelPlanTourismSpotList, travelPlanSpot]);
    // handlers.setState([...travelPlanTourismSpotList, travelPlanSpot]);
    // // setTravelPlanTourismSpotCount(travelPlanTourismSpotCount + 1);
    // console.log(travelPlanTourismSpotList);

    // storeState.arrayData.push(travelPlanSpot);
    // handlers.setState(storeState.arrayData);
    // console.log(storeState.arrayData);
  };

  return (
    <div>
      {/* <DndListHandle storeState={storeState} state={state} handlers={handlers} /> */}
      <DndkitList />
      <Button variant="light" onClick={handleTourismSpotCount}>
        場所を追加
      </Button>
      {/* </Timeline> */}
    </div>
  );
};
