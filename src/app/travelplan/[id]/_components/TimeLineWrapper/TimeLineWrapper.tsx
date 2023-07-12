"use client";
import { useEffect, useState } from "react";
import { RefObject } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { travelPlanTourismSpotListState, travelPlanTourismSpotInputState, firebaseTokenState } from "@/atoms";
import { Divider, Box, Button, Modal, Textarea, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFlag3, IconPlus } from "@tabler/icons-react";
import DndkitList from "./DndkitList";
import { SelectTourismSpot } from "./SelectTourismSpot";
import { useParams } from "next/navigation";
import { createTravelPlanSpot } from "@/utils/createTravelPlanSpot";

type Props = {
  ref: RefObject<HTMLDivElement>;
  collaborateId: string;
};

export const TimeLineWrapper = (props: Props) => {
  const { ref, collaborateId } = props;
  const [travelPlanTourismSpotList, setTravelPlanTourismSpotList] = useRecoilState(travelPlanTourismSpotListState);
  const [travelPlanTourismSpotInput, setTravelPlanTourismSpotInput] = useRecoilState(travelPlanTourismSpotInputState);
  const [opened, { open, close }] = useDisclosure(false);
  const [comment, setComment] = useState<string>("");
  const router = useParams();

  const token = useRecoilValue(firebaseTokenState);

  const handleTourismSpotCount = async () => {
    await createTravelPlanSpot(collaborateId!, {
      tourismSpotId: travelPlanTourismSpotInput.id,
      comment: comment,
      sortIndex: travelPlanTourismSpotList.length + 1,
      minuteSincePrevious: 5,
    });
    // setTravelPlanTourismSpotList([...travelPlanTourismSpotList, travelPlanSpot]);
    setTravelPlanTourismSpotInput({
      id: "",
      image: "",
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
            onChange={(e) => setComment(e.currentTarget.value)}
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
            disabled={!travelPlanTourismSpotInput.id}
          >
            プランを追加
          </Button>
        </Flex>
      </Modal>
    </Flex>
  );
};
