import { Button, Flex, Modal, Textarea } from "@mantine/core";
import { SelectTourismSpot } from "./SelectTourismSpot";
import { createTravelPlanSpot } from "@/utils/createTravelPlanSpot";
import { useCallback, useState } from "react";
import { useTravelPlan } from "@/hooks/useTravelPlan";

type Props = {
  travelPlanId: string;
  opened: boolean;
  close: () => void;
};

export const TravelPlanSpotModal = ({ travelPlanId, opened, close }: Props) => {
  const [selectedTourismSpotId, setSelectedTourismSpotId] = useState<string | undefined>();
  const [comment, setComment] = useState<string>("");
  const sortIndexForNewSpot = useSortIndexForNewSpot(travelPlanId);
  const addButtonDisabled = selectedTourismSpotId == null || sortIndexForNewSpot == null;

  const handleSelectTourismSpotChange = useCallback((tourismSpotId?: string) => {
    setSelectedTourismSpotId(tourismSpotId);
  }, []);

  const handleAddButtonClick = useCallback(async () => {
    if (addButtonDisabled) return;

    await createTravelPlanSpot(travelPlanId, selectedTourismSpotId, {
      tourismSpotId: selectedTourismSpotId,
      comment,
      sortIndex: sortIndexForNewSpot,
      minuteSincePrevious: 5,
    });

    close();
  }, [addButtonDisabled, close, comment, sortIndexForNewSpot, selectedTourismSpotId, travelPlanId]);

  return (
    <Modal opened={opened} onClose={close} title="地点を追加する" centered size="lg">
      <Flex mih={50} gap="md" justify="center" align="center" direction="column">
        <SelectTourismSpot onChange={handleSelectTourismSpotChange} />
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
          placeholder="コメントを入力してください"
          label="コメント"
          size="md"
          style={{ width: " 95%" }}
          minRows={3}
        />

        <Button variant="light" onClick={handleAddButtonClick} color="cyan" disabled={addButtonDisabled}>
          プランを追加
        </Button>
      </Flex>
    </Modal>
  );
};

const useSortIndexForNewSpot = (travelPlanId: string): number | undefined => {
  const travelPlan = useTravelPlan(travelPlanId);
  if (travelPlan == null) return;

  const maxSortIndex = travelPlan.travelPlanSpots.reduce((prev, curr) => Math.max(prev, curr.sortIndex), 0);
  return maxSortIndex + 1;
};
