import { usePathname } from "next/navigation";
import { CopyButton, ActionIcon, Tooltip, Text, Box, Flex } from "@mantine/core";
import { IconPaperclip, IconCopy, IconCheck } from "@tabler/icons-react";

export const ShareModalContent = () => {
  //TODO: 本番環境になったら変える
  const baseURL = "http://localhost:3000";
  const pathname = usePathname();
  const currentURL = `${baseURL}${pathname}`;

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
          textAlign: "center",
          padding: theme.spacing.md,
          borderRadius: theme.radius.md,
        })}
      >
        <Text fw={600}>{currentURL}</Text>
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
    </>
  );
};
