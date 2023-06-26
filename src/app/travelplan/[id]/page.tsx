"use client";
import { Modal, Group, Button, Textarea, Text } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import { TimeLineWrapper } from "./_components/TimeLineWrapper";
import { ShareModalContent } from "./_components/ShareModalContent";
import { useDisclosure } from "@mantine/hooks";

const Page = () => {
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
      <Text>上越旅行</Text>
      <Textarea />
      <TimeLineWrapper />
    </main>

    //   <TimeLineWrapper />
  );
};

export default Page;
