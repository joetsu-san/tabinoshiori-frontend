"use client";
import { Modal, Group, Button, Textarea, Text, Flex, Input } from "@mantine/core";
import { IconMapPin, IconMapPinCancel, IconPlus, IconShare } from "@tabler/icons-react";
import { TimelineWrapper } from "./_components/TimelineWrapper/TimelineWrapper";
import { ShareModalContent } from "./_components/ShareModalContent";
import { useDisclosure } from "@mantine/hooks";
import { useRef, useState } from "react";
import { GenerateImageModalContent } from "./_components/GenerateImageModalContent";
import { updateTravelPlanOverview } from "@/utils/updateTravelPlanOverview";
import { useParams } from "next/navigation";
import { useTravelPlan } from "@/hooks/useTravelPlan";
import { TravelPlan, subscribeRemoteTravelPlan } from "@/utils/subscribeRemoteTravelPlan";
import { TravelPlanSpotModal } from "./_components/TimelineWrapper/TravelPlanSpotModal";
import Link from "next/link";
import { useMapNaviUrl } from "./_hooks/useMapNaviUrl";

const Page = () => {
  const router = useParams();
  const travelPlanId = router.id;
  const travelPlan = useTravelPlan(travelPlanId);
  const { mapNaviUrl, error } = useMapNaviUrl(travelPlanId);

  const [opened, { open, close }] = useDisclosure(false);
  const [openedImageModal, { open: openImageModal, close: closeImageModal }] = useDisclosure(false);
  const [openedTourismSpot, { open: tourismSpotOpen, close: tourismSpotClose }] = useDisclosure(false);

  const [title, setTitle] = useState("...");
  const [description, setDescription] = useState("...");
  const [visitedAt, setVisitedAt] = useState(() => new Date().toISOString());
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [isDescriptionInput, setIsDescriptionInput] = useState(false);
  const openTitleInput = () => {
    if (travelPlan == null) {
      return;
    }
    setTitle(travelPlan.title);
    setIsTitleInput(true);
  };

  const closeTitleInput = () => {
    updateTravelPlanOverview(travelPlanId!, {
      title: title,
      description: travelPlan?.description ?? "",
      visitedAt: travelPlan?.visitedAt?.toISOString(),
    });
    setIsTitleInput(false);
  };

  const openDescriptionInput = () => {
    if (travelPlan == null) {
      return;
    }
    setDescription(travelPlan.description);
    setIsDescriptionInput(true);
  };

  const closeDescriptionInput = () => {
    if (travelPlan == null) {
      return;
    }
    updateTravelPlanOverview(travelPlanId!, {
      title: travelPlan?.title,
      description: description,
      visitedAt: travelPlan?.visitedAt?.toISOString(),
    });
    setIsDescriptionInput(false);
  };

  const imageRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   subscribeRemoteTravelPlan(travelPlanId, (snapshot) => {
  //     // タイトル・説明文の編集の「キャンセル」を行えるようにする場合は、
  //     // 編集中のタイトル・説明文を保持する専用のstateを用意することで、
  //     // 編集中でもサーバーからのタイトル・説明文の更新を反映できる必要がある
  //     if (!isTitleInput) {
  //       setTitle(snapshot.title);
  //     }
  //     if (!isDescriptionInput) {
  //       setDescription(snapshot.description);
  //     }
  //   });
  // }, [travelPlanId]);

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
      <Modal opened={openedImageModal} onClose={closeImageModal} title="画像化する" centered>
        <GenerateImageModalContent imageRef={imageRef} />
      </Modal>

      <Group position="center" m={10}>
        <Button color="cyan" variant="light" compact onClick={open} leftIcon={<IconShare size="1rem" />}>
          旅のしおりを共有する
        </Button>
        {error ? (
          <Button color="cyan" variant="light" compact leftIcon={<IconMapPinCancel size="1rem" />} disabled>
            マップで見る
          </Button>
        ) : (
          <Link href={mapNaviUrl!} target="_blank">
            <Button color="cyan" variant="light" compact leftIcon={<IconMapPin size="1rem" />}>
              マップで見る
            </Button>
          </Link>
        )}
      </Group>

      <Flex direction="column" gap="xs">
        <Flex justify="space-between" align="center" gap="sm" style={{ width: "90vw" }}>
          {isTitleInput ? (
            <>
              <Input
                defaultValue={title}
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
                {travelPlan?.title ?? "..."}
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
                defaultValue={description}
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
              <Text size="sm">{travelPlan?.description ?? "..."}</Text>
              <Button size="xs" color="gray" variant="light" compact onClick={openDescriptionInput}>
                編集
              </Button>
            </>
          )}
        </Flex>
      </Flex>
      <TimelineWrapper ref={imageRef} travelPlanId={travelPlanId} />

      <Button onClick={tourismSpotOpen} color="cyan" variant="light" leftIcon={<IconPlus />} mt="xs">
        プランを追加
      </Button>
      <TravelPlanSpotModal travelPlanId={travelPlanId} opened={openedTourismSpot} close={tourismSpotClose} />
    </main>
  );
};

export default Page;
