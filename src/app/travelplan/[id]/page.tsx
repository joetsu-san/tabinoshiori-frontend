"use client";
import { Modal, Group, Button, Textarea, Text, Flex, Input, TextInput } from "@mantine/core";
import { IconDeviceMobileMessage, IconPictureInPicture, IconScreenshot, IconShare } from "@tabler/icons-react";
import { TimeLineWrapper } from "./_components/TimeLineWrapper/TimeLineWrapper";
import { ShareModalContent } from "./_components/ShareModalContent";
import { useDisclosure } from "@mantine/hooks";
import { useRef, useState } from "react";
import { GenerateImageModalContent } from "./_components/GenerateImageModalContent";
import { useTravelPlan } from "@/hooks/useTravelPlan";

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

  const router = useParams();
  const id = router.id;
  const { data: travelplan, error } = useTravelPlan(id);

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

      <Flex direction="column" gap="xs">
        <Flex justify="space-between" align="center" gap="sm" style={{ width: "90vw" }}>
          {isTitleInput ? (
            <>
              <Input
                defaultValue={travelplan ? travelplan.title : ""}
                style={{ width: "100%" }}
                onChange={(event) => setTitle(event.currentTarget.value)}
              />
              <Button color="gray" compact onClick={closeTitleInput}>
                保存
              </Button>
            </>
          ) : (
            <>
              <Text fz="xl" fw={600}>
                {travelplan?.title}
              </Text>
              <Button size="xs" color="gray" variant="light" compact onClick={openTitleInput}>
                編集
              </Button>
            </>
          )}
        </Flex>

        <Flex justify="space-between" align="center" gap="sm" style={{ width: "90vw" }}>
          {isDescriptionInput ? (
            <>
              <Textarea
                defaultValue={travelplan ? travelplan.description : ""}
                style={{ width: "100%" }}
                size="xs"
                autosize
                onChange={(event) => setDescription(event.currentTarget.value)}
              />
              <Button color="gray" compact onClick={closeDescriptionInput}>
                保存
              </Button>
            </>
          ) : (
            <>
              <Text size="sm">{travelplan?.description}</Text>
              <Button size="xs" color="gray" variant="light" compact onClick={openDescriptionInput}>
                編集
              </Button>
            </>
          )}
        </Flex>
      </Flex>
      <TimeLineWrapper ref={imageRef} id={id} />
    </main>
  );
};

export default Page;
