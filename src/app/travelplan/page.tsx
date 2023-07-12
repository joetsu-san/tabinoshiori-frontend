"use client";
import type { NextPage } from "next";
import { IconWriting } from "@tabler/icons-react";
import { TravelPlanCard } from "./_component/TravelplanCard";
import { Box, Button, LoadingOverlay } from "@mantine/core";
import { TravelPlanDetail } from "@/@types";
import { useTravelPlanList } from "@/hooks/useTravelPlanList";
import { createTravelplan } from "@/lib/api/createTravelplan";
import { useRecoilValue } from "recoil";
import { firebaseTokenState } from "@/atoms";

const Page: NextPage = () => {
  const { data: travelPlans, error } = useTravelPlanList();
  const token = useRecoilValue(firebaseTokenState);

  const handleClick = async () => {
    await createTravelplan(token!!);
  };

  if (!travelPlans)
    return (
      <Box h={"calc(100vh - 12rem)"} maw={400} pos="relative">
        <LoadingOverlay visible={true} zIndex={1}></LoadingOverlay>
      </Box>
    );

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Button color="cyan" variant="light" leftIcon={<IconWriting size="1rem" />} m={10} onClick={handleClick}>
        旅のしおりを作成する
      </Button>

      {travelPlans.map((travelplan) => (
        <TravelPlanCard travelplan={travelplan} key={travelplan.id} />
      ))}
    </main>
  );
};

export default Page;
