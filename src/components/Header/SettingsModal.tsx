import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Box, NavLink } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconSettings, IconChevronRight, IconUser, IconMail, IconCake, IconLogout } from "@tabler/icons-react";

export const SettingsModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal title="プロフィール" opened={opened} onClose={close} centered>
        {/* TODO: 中身の実装 */}
        {/* ログインしてる時のモーダルコンテンツ */}
        <Box>
          <NavLink
            label="ユーザー名"
            icon={<IconUser size="1.5rem" stroke={1.5} />}
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          />
          <NavLink
            label="メールアドレス"
            icon={<IconMail size="1.5rem" stroke={1.5} />}
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          />
          <NavLink label="性別" rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />} />
          <NavLink
            label="生年月日"
            icon={<IconCake size="1.5rem" stroke={1.5} />}
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          />
          <NavLink
            label="ログアウト"
            icon={<IconLogout size="1.5rem" stroke={1.5} />}
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
            active={true}
            color="red"
          />
        </Box>
      </Modal>

      <Group position="center">
        <ActionIcon variant="light" onClick={open}>
          <IconSettings size="1rem" />
        </ActionIcon>
      </Group>
    </>
  );
};
