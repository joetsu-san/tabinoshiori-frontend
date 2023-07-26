import { Button, Flex, Modal, Textarea } from "@mantine/core";
import { SelectTourismSpot } from "./SelectTourismSpot";
import { createTravelPlanSpot } from "@/utils/createTravelPlanSpot";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { travelPlanTourismSpotInputState, travelPlanTourismSpotListState } from "@/atoms";

type Props = {
  travelPlanId: string;
  opened: boolean;
  close: () => void;
};

export const TravelPlanSpotModal = ({ travelPlanId, opened, close }: Props) => {
  const [comment, setComment] = useState<string>("");
  const [travelPlanTourismSpotList, setTravelPlanTourismSpotList] = useRecoilState(travelPlanTourismSpotListState);
  const [travelPlanTourismSpotInput, setTravelPlanTourismSpotInput] = useRecoilState(travelPlanTourismSpotInputState);

  const handleTourismSpotCount = async () => {
    await createTravelPlanSpot(travelPlanId!, travelPlanTourismSpotInput.id, {
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
    close();
  };
  return (
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
          onClick={handleTourismSpotCount}
          color="cyan"
          disabled={!travelPlanTourismSpotInput.id || !comment}
        >
          プランを追加
        </Button>
      </Flex>
    </Modal>
  );
};
