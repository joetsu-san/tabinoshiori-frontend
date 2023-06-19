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
            component="a"
            href="/profile"
            label="ユーザー名"
            description="hogehoge"
            icon={<IconUser size="1.5rem" stroke={1.5} />}
          />
          <NavLink
            label="メールアドレス"
            description="hoge@example.com"
            icon={<IconMail size="1.5rem" stroke={1.5} />}
          />
          <NavLink
            component="a"
            href="/profile/gender"
            label="性別"
            description="男性"
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          />
          <NavLink
            component="a"
            href="/profile/birthday"
            label="生年月日"
            description="1999/01/01"
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
        <ActionIcon color="cyan" variant="light" onClick={open}>
          <IconSettings size="1rem" />
        </ActionIcon>
      </Group>
    </>
  );
};
