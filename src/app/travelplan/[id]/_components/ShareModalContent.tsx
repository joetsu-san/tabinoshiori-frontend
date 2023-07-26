import { CopyButton, ActionIcon, Tooltip, Text, Box, Flex, ScrollArea, rem } from "@mantine/core";
import { IconPaperclip, IconCopy, IconCheck, IconQrcode } from "@tabler/icons-react";
import { useQRCode } from "next-qrcode";

export const ShareModalContent = () => {
  const currentURL = window.location.href;
  const { SVG } = useQRCode();

  return (
    <>
      <Flex align="center" gap="md" mb={8}>
        <ActionIcon color="cyan" size="lg" radius="md" variant="light">
          <IconPaperclip size="1.5rem" />
        </ActionIcon>
        <Text fw={600}>URLをコピーする</Text>
      </Flex>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
          padding: theme.spacing.md,
          borderRadius: theme.radius.md,
        })}
      >
        <ScrollArea>
          <Text truncate>{currentURL}</Text>
        </ScrollArea>
        <CopyButton value={currentURL} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? "コピー完了" : "コピー"} withArrow position="right">
              <ActionIcon color={copied ? "cyan" : "gray"} onClick={copy}>
                {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Box>

      <Flex align="center" gap="md" mt={24}>
        <ActionIcon color="cyan" size="lg" radius="md" variant="light">
          <IconQrcode size="1.5rem" />
        </ActionIcon>
        <Text fw={600}>QRコードから読み取る</Text>
      </Flex>

      <Flex justify="center">
        <SVG
          text={currentURL}
          options={{
            level: "M",
            margin: 3,
            scale: 4,
            width: 250,
          }}
        />
      </Flex>
    </>
  );
};
