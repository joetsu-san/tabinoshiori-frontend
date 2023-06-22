import { useDisclosure } from "@mantine/hooks";
import { Modal, Group } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";

export const SettingsModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} centered>
        {/* TODO: 中身の実装 */}
        ログインしてる時のモーダルコンテンツ
      </Modal>

      <Group position="center">
        <ActionIcon color="cyan" variant="light" onClick={open}>
          <IconSettings size="1rem" />
        </ActionIcon>
      </Group>
    </>
  );
};
