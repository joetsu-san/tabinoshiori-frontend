"use client";
import { RefObject } from "react";
import { Divider, Box, Flex } from "@mantine/core";
import { IconFlag3 } from "@tabler/icons-react";
import { TimelineEditor } from "./TimelineEditor";

type Props = {
  ref: RefObject<HTMLDivElement>;
  travelPlanId: string;
};

export const TimelineWrapper = (props: Props) => {
  const { ref, travelPlanId } = props;

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
