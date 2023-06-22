"use client";
import type { NextPage } from "next";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import { TimeLineWrapper } from "./_components/TimeLineWrapper";
import { ShareModalContent } from "./_components/ShareModalContent";

const Page: NextPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Modal opened={opened} onClose={close} title="旅のしおりを共有する" centered>
        <ShareModalContent />
      </Modal>
      <Group position="center" m={10}>
        <Button color="cyan" variant="light" compact onClick={open} leftIcon={<IconShare size="1rem" />}>
          旅のしおりを共有する
        </Button>
      </Group>

      <h1>旅のしおり</h1>
      <h2>上越旅行</h2>
      <textarea />
      <TimeLineWrapper />
      {/* <EditorContent style={{ width: "100%", height: "100%", border: "1px solid #000" }} editor={editor} /> */}
    </main>
  );
};

export default Page;
