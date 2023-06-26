"use client";
import type { NextPage } from "next";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, Textarea, Text } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
// import { TimeLineWrapper } from "./_components/TimeLineWrapper";
import { ShareModalContent } from "./[id]/_components/ShareModalContent";

const Page: NextPage = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    ></main>
  );
};

export default Page;
