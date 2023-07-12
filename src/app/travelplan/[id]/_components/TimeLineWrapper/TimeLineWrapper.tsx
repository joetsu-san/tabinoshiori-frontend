"use client";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { RefObject } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { travelPlanTourismSpotListState, travelPlanTourismSpotInputState, firebaseTokenState } from "@/atoms";
import { Divider, Box, Button, Modal, Textarea, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFlag3, IconPlus } from "@tabler/icons-react";
import { TravelPlanSpot } from "@/@types";
import DndkitList from "./DndkitList";
import { SelectTourismSpot } from "./SelectTourismSpot";
import { updateTravelPlanOverview } from "@/utils/updateTravelPlanOverview";
import { useParams, useSearchParams } from "next/navigation";
import { createTravelPlanSpot } from "@/utils/createTravelPlanSpot";

type Props = {
  ref: RefObject<HTMLDivElement>;
};

export const TimeLineWrapper = (props: Props) => {
  const { ref } = props;
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [travelPlanTourismSpotList, setTravelPlanTourismSpotList] = useRecoilState(travelPlanTourismSpotListState);
  const [travelPlanTourismSpotInput, setTravelPlanTourismSpotInput] = useRecoilState(travelPlanTourismSpotInputState);
  const [opened, { open, close }] = useDisclosure(false);
  const [comment, setComment] = useState<string>("");
  const router = useSearchParams();
  const travelPlanId = router.get("id");

  const token = useRecoilValue(firebaseTokenState);

  useEffect(() => {
    console.log(travelPlanId);
  }, [travelPlanId]);

  const handleTourismSpotCount = async () => {
    await createTravelPlanSpot(travelPlanId!, {
      tourismSpotId: travelPlanTourismSpotInput.id,
      comment: commentRef.current!.value,
      sortIndex: travelPlanTourismSpotList[travelPlanTourismSpotList.length].sortIndex + 1,
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
            ref={commentRef}
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
