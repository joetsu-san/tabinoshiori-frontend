"use client";
import { useEffect, useState } from "react";
import { RefObject } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { travelPlanTourismSpotListState, travelPlanTourismSpotInputState, firebaseTokenState } from "@/atoms";
import { Divider, Box, Button, Modal, Textarea, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFlag3, IconPlus } from "@tabler/icons-react";
import { TimelineEditor } from "./TimelineEditor";
import { SelectTourismSpot } from "./SelectTourismSpot";
import { createTravelPlanSpot } from "@/utils/createTravelPlanSpot";

type Props = {
  ref: RefObject<HTMLDivElement>;
  travelPlanId: string;
};

export const TimelineWrapper = (props: Props) => {
  const { ref, travelPlanId } = props;

  const token = useRecoilValue(firebaseTokenState);

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
      <TimelineEditor travelPlanId={travelPlanId} />
    </Flex>
  );
};
