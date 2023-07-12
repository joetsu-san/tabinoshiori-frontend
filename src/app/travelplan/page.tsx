"use client";
import type { NextPage } from "next";
import { IconWriting } from "@tabler/icons-react";
import { TravelPlanCard } from "./_component/TravelplanCard";
import { Button } from "@mantine/core";
import { TravelPlanDetail } from "@/@types";

const Page: NextPage = () => {
  const travelPlans: TravelPlanDetail[] = [
    {
      id: "1",
      title: "旅のタイトル",
      authorId: "bfwiuqbfwq",
      description: "旅の説明",
      visitedAt: "",
      travelPlanSpots: [
        {
          travelPlanSpotInfo: {
            id: "1",
            title: "上越妙高駅",
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
                id: "1",
                src: "https://picsum.photos/200/300",
              },
            ],
          },
          comment: "string",
          sortIndex: 1,
          minuteSincePrevious: 1,
        },
      ],
    },
    {
      id: "2",
      title:
        "タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル",
      authorId: "bfwiuqbfwq",
      description: "説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明",
      visitedAt: "",
      travelPlanSpots: [
        {
          travelPlanSpotInfo: {
            id: "1",
            title: "上越妙高駅",
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
                id: "1",
                src: "https://picsum.photos/200/300",
              },
            ],
          },
          comment: "string",
          sortIndex: 1,
          minuteSincePrevious: 1,
        },
      ],
    },
  ];

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Button color="cyan" variant="light" leftIcon={<IconWriting size="1rem" />} m={10}>
        旅のしおりを作成する
      </Button>

      {travelPlans.map((travelplan) => (
        <TravelPlanCard travelplan={travelplan} key={travelplan.id} />
      ))}
    </main>
  );
};

export default Page;
