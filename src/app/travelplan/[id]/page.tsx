"use client";
import { Modal, Group, Button, Textarea, Text, Flex, Input, TextInput } from "@mantine/core";
import { IconDeviceMobileMessage, IconPictureInPicture, IconScreenshot, IconShare } from "@tabler/icons-react";
import { TimeLineWrapper } from "./_components/TimeLineWrapper";
import { ShareModalContent } from "./_components/ShareModalContent";
import { useDisclosure } from "@mantine/hooks";
import { useRef, useState } from "react";
import { GenerateImageModalContent } from "./_components/GenerateImageModalContent";

const Page = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedIamgeModal, { open: openImageModal, close: closeImageModal }] = useDisclosure(false);

  const [title, setTitle] = useState("タイトル");
  const [description, setDescription] = useState("説明");
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [isDescriptionInput, setIsDescriptionInput] = useState(false);
  const openTitleInput = () => setIsTitleInput(true);
  const closeTitleInput = () => setIsTitleInput(false);
  const openDescriptionInput = () => setIsDescriptionInput(true);
  const closeDescriptionInput = () => setIsDescriptionInput(false);

  const imageRef = useRef<HTMLDivElement>(null);

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
      <Modal opened={openedIamgeModal} onClose={closeImageModal} title="画像化する" centered>
        <GenerateImageModalContent imageRef={imageRef} />
      </Modal>

      <Group position="center" m={10}>
        <Button color="cyan" variant="light" compact onClick={open} leftIcon={<IconShare size="1rem" />}>
          旅のしおりを共有する
        </Button>
        <Button color="cyan" variant="light" compact onClick={openImageModal} leftIcon={<IconScreenshot size="1rem" />}>
          画像化する
        </Button>
      </Group>

      <Flex direction="column">
        <Flex justify="space-between">
          {isTitleInput ? (
            <>
              <Input defaultValue={title} />
              <Button color="gray" variant="light" compact onClick={closeTitleInput}>
                終了
              </Button>
            </>
          ) : (
            <>
              <Text fz="xl">{title}</Text>
              <Button color="gray" variant="light" compact onClick={openTitleInput}>
                編集
              </Button>
            </>
          )}
        </Flex>

        <Flex justify="space-between">
          {isDescriptionInput ? (
            <>
              <TextInput defaultValue={description} onChange={(event) => setTitle(event.currentTarget.value)} />
              <Button color="gray" variant="light" compact onClick={closeDescriptionInput}>
                終了
              </Button>
            </>
          ) : (
            <>
              <Text>{description}</Text>
              <Button color="gray" variant="light" compact onClick={openDescriptionInput}>
                編集
              </Button>
            </>
          )}
        </Flex>
      </Flex>
      <TimeLineWrapper ref={imageRef} />
    </main>
  );
};

export default Page;
