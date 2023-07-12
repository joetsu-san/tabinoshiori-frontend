"use client";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IconWriting } from "@tabler/icons-react";
import { TravelPlanCard } from "./_component/TravelplanCard";
import { Button, Box, LoadingOverlay } from "@mantine/core";
import { useTravelPlanList } from "@/hooks/useTravelPlanList";
import { useCreateTravelPlan } from "@/hooks/useCreateTravelPlan";

const Page: NextPage = () => {
  const router = useRouter();
  const { data: travelplanList, error } = useTravelPlanList();
  const { createTravelPlan } = useCreateTravelPlan();

  useEffect(() => {
    console.log(travelplanList);
    console.log(error);
  }, [travelplanList, error]);

  const handleTravelPlan = async () => {
    const newTravelPlan = await createTravelPlan();
    router.push("travelplan/" + newTravelPlan?.id);
    console.log("newTravelPlan", newTravelPlan);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Button color="cyan" variant="light" leftIcon={<IconWriting size="1rem" />} m={10} onClick={handleTravelPlan}>
        旅のしおりを作成する
      </Button>

      {!travelplanList ? (
        <Box h={"calc(100vh - 12rem)"} maw={400} pos="relative">
          <LoadingOverlay visible={!travelplanList} zIndex={1}></LoadingOverlay>
        </Box>
      ) : (
        travelplanList.map((travelplan) => <TravelPlanCard travelplan={travelplan} key={travelplan.id} />)
      )}
    </main>
  );
};

export default Page;
