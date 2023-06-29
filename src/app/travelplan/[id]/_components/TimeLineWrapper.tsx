"use client";
import { travelPlanTourismSpotCountState, travelPlanTourismSpotListState } from "@/atoms";
import { Timeline, Text, Button, Modal, Select, Textarea, Skeleton } from "@mantine/core";
import { useRecoilState } from "recoil";
import { TravelPlanSpot } from "../../../../../api/@types";
import DndListHandle from "@/components/DndListHandle";
import { useDisclosure, useListState } from "@mantine/hooks";
import { relative } from "path";
import { MappedTypeDescription } from "@syncedstore/core/types/doc";
import { NextPage } from "next";
import { useSyncedStore } from "@syncedstore/react";
import { store } from "@/lib/store";
import DndkitList from "./DndkitList";
import { RefObject } from "react";
// import { randomUUID } from "crypto";

type Props = {
  ref: RefObject<HTMLDivElement>;
};

export const TimeLineWrapper = (props: Props) => {
  const { ref } = props;
  const [travelPlanTourismSpotList, setTravelPlanTourismSpotList] = useRecoilState(travelPlanTourismSpotListState);
  // const [travelPlanTourismSpotCount, setTravelPlanTourismSpotCount] = useRecoilState(travelPlanTourismSpotCountState);
  const [opened, { open, close }] = useDisclosure(false);
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
    <div ref={ref}>
      <DndkitList />
      <Button onClick={open} color="cyan" variant="light">
        場所を追加
      </Button>
      <Modal opened={opened} onClose={close} title="地点を追加する" centered>
        <Skeleton width={50} height={50} />
        <Select
          data={[]} // label="Choose employee of the month"
          // placeholder="Pick one"
          // itemComponent={SelectItem}
          // data={data}
          // searchable
          // maxDropdownHeight={400}
          // nothingFound="Nobody here"
          // filter={(value, item) =>
          //   item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
          //   item.description.toLowerCase().includes(value.toLowerCase().trim())
          // }
        />
        <Textarea></Textarea>
        <Button
          variant="light"
          onClick={() => {
            handleTourismSpotCount;
            close;
          }}
          color="cyan"
        >
          場所を追加
        </Button>
      </Modal>
    </div>
  );
};
