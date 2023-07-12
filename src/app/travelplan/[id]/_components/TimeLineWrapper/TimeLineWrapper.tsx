"use client";
import { useState } from "react";
import { RefObject } from "react";
import { useRecoilState } from "recoil";
import { travelPlanTourismSpotListState, travelPlanTourismSpotInputState } from "@/atoms";
import { Divider, Box, Button, Modal, Textarea, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFlag3, IconPlus } from "@tabler/icons-react";
import { TravelPlanSpot } from "@/@types";
import DndkitList from "./DndkitList";
import { SelectTourismSpot } from "./SelectTourismSpot";
import { useCreateTravelPlanSpot } from "@/hooks/useCreateTravelPlanSpot";

type Props = {
  ref: RefObject<HTMLDivElement>;
  id: string;
};

export const TimeLineWrapper = (props: Props) => {
  const { ref, id } = props;
  const [travelPlanTourismSpotList, setTravelPlanTourismSpotList] = useRecoilState(travelPlanTourismSpotListState);
  const [travelPlanTourismSpotInput, setTravelPlanTourismSpotInput] = useRecoilState(travelPlanTourismSpotInputState);
  const [opened, { open, close }] = useDisclosure(false);
  const [comment, setComment] = useState<string>("");
  const { createTravelPlanSpot } = useCreateTravelPlanSpot();

  const handleTourismSpotCount = async () => {
    // TODO: トラベルプランpostの処理を書く
    const tourismSpotId = travelPlanTourismSpotInput.value;
    const sortIndex = travelPlanTourismSpotList.length + 1;
    const minuteSincePrevious = 15;
    const newTravelPlanSpot = await createTravelPlanSpot(id, {
      tourismSpotId,
      comment,
      sortIndex,
      minuteSincePrevious,
    });
    console.log("newTravelPlanSpot", newTravelPlanSpot);

    // MEMO: バックエンドからとってくるモックデータ。今はフロントだけでも追加できているように見えるようにtitle, src, commentに入力データを入れている
    const travelPlanSpot: TravelPlanSpot = {
      travelPlanSpotId: travelPlanTourismSpotInput.value,
      tourismSpotId: window.crypto.randomUUID(),
      title: travelPlanTourismSpotInput.label,
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
          src: travelPlanTourismSpotInput.image,
        },
      ],
      comment: comment,
      sortIndex: travelPlanTourismSpotList.length + 1,
      minuteSincePrevious: 15,
    };
    setTravelPlanTourismSpotList([...travelPlanTourismSpotList, travelPlanSpot]);
    setComment("");
    setTravelPlanTourismSpotInput({
      image: "",
      value: "",
      label: "",
    });
  };

  return (
    <Flex ref={ref} direction="column">
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <IconFlag3 size={12} />
            <Box ml={5}>プラン</Box>
          </>
        }
      />
      <DndkitList />
      <Button onClick={open} color="cyan" variant="light" leftIcon={<IconPlus />}>
        プランを追加
      </Button>
      <Modal opened={opened} onClose={close} title="地点を追加する" centered size="lg">
        <Flex mih={50} gap="md" justify="center" align="center" direction="column">
          <SelectTourismSpot />
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="コメントを入力してください"
            label="コメント"
            size="md"
            style={{ width: " 95%" }}
            minRows={3}
          />

          <Button
            variant="light"
            onClick={() => {
              handleTourismSpotCount();
              close();
            }}
            color="cyan"
            disabled={!travelPlanTourismSpotInput.value}
          >
            プランを追加
          </Button>
        </Flex>
      </Modal>
    </Flex>
  );
};
