"use client";

import { Flex, Modal } from "@mantine/core";
import { useCallback, useState } from "react";
import { TourismSpotThumbnail } from "./TourismSpotThumbnail";
import { CommentInput } from "./CommentInput";
import { TourismSpotSelect } from "./TourismSpotSelect";
import { Button } from "./Button";
import { useDeleteTravelPlanSpot, usePutTravelPlanSpot } from "./hooks";

type Props = {
  travelPlanSpotId: string;
  tourismSpotId: string;
  tourismSpotImage: string;
  comment: string;
  opened: boolean;
  onClose: () => void;
};
export const UpdateTravelPlanModal = ({
  travelPlanSpotId,
  tourismSpotId: defaultTourismSpotId,
  tourismSpotImage,
  comment: defaultComment,
  opened,
  onClose,
}: Props) => {
  const [image, setImage] = useState(tourismSpotImage);

  const [tourismSpotId, setTourismSpotId] = useState(defaultTourismSpotId);
  const handleChangeTourismSpot = useCallback((tourismSpotId: string, imageSrc: string) => {
    setImage(imageSrc);
    setTourismSpotId(tourismSpotId);
  }, []);

  const [comment, setComment] = useState(defaultComment);
  const handleChangeComment = (comment: string) => {
    setComment(comment);
  };

  // TODO: use api hooks
  const { putTravelPlanSpot } = usePutTravelPlanSpot();
  const handleDelete = async () => {
    console.debug(travelPlanSpotId);
    await putTravelPlanSpot();
  };

  const { deleteTravelPlanSpot } = useDeleteTravelPlanSpot();
  const handleSubmit = async () => {
    await deleteTravelPlanSpot();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="地点を編集する" centered size="lg">
      <Flex mih={50} gap="md" justify="center" align="center" direction="column">
        <TourismSpotThumbnail imageSrc={image} />
        <TourismSpotSelect onChange={handleChangeTourismSpot} value={tourismSpotId} />
        <CommentInput onChange={handleChangeComment} value={comment} />
        <Flex direction="row" gap="md">
          <Button onClick={handleDelete} color="red">
            地点を削除する
          </Button>
          <Button onClick={handleSubmit}>変更</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};
