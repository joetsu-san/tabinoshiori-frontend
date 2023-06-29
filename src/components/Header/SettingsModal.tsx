import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Box, NavLink, Button, Text, Divider, Select } from "@mantine/core";
import { modals } from "@mantine/modals";
import { ActionIcon } from "@mantine/core";
import { BirthdayInput } from "./BirthdayInput";
import { GenderInput } from "./GenderInput";
import {
  IconSettings,
  IconChevronRight,
  IconUser,
  IconMail,
  IconCake,
  IconLogout,
  IconX,
  IconCheck,
  IconGenderMale,
  IconGenderFemale,
} from "@tabler/icons-react";
import { useState } from "react";

export const SettingsModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [defaultGender, setGender] = useState<string | undefined>(undefined);

  const [defaultYear, setYear] = useState<string | undefined>(undefined);
  const [defaultMonth, setMonth] = useState<string | undefined>(undefined);
  const [defaultDay, setDay] = useState<string | undefined>(undefined);

  // 性別変更モーダル
  const openGenderModal = () =>
    modals.open({
      padding: "0px",
      centered: true,
      radius: 10,
      withCloseButton: false,
      closeOnClickOutside: false,
      children: (
        <>
          <Group position="left" sx={{ height: "100%" }} pt={10} pb={10}>
            <Button variant="subtle" color="dark" onClick={() => modals.closeAll()} w={"20%"}>
              <IconX></IconX>
            </Button>
            <Box w={"75%"}>
              <Text ml={"26%"}>性別変更</Text>
            </Box>
          </Group>
          <Divider></Divider>
          <Box p={"20px"}>
            <GenderInput defaultGender={defaultGender} />
            <Group position="apart">
              <Button variant="light" color="gray" onClick={openSettingModal}>
                キャンセル
              </Button>
              <Button leftIcon={<IconCheck size="0.8rem" stroke={1.5} />} color="cyan">
                保存
              </Button>
            </Group>
          </Box>
        </>
      ),
    });

  // 生年月日変更モーダル
  const openBirthdayModal = () =>
    modals.open({
      padding: "0px",
      centered: true,
      radius: 10,
      withCloseButton: false,
      closeOnClickOutside: false,
      children: (
        <>
          <Group position="left" sx={{ height: "100%" }} pt={10} pb={10}>
            <Button variant="subtle" color="dark" onClick={() => modals.closeAll()} w={"20%"}>
              <IconX></IconX>
            </Button>
            <Box w={"75%"}>
              <Text ml={"18%"}>生年月日変更</Text>
            </Box>
          </Group>
          <Divider></Divider>
          <Box p={"20px"}>
            <BirthdayInput defaultYear={defaultYear} defaultMonth={defaultMonth} defaultDay={defaultDay} />
            <Group position="apart">
              <Button variant="light" color="gray" onClick={openSettingModal}>
                キャンセル
              </Button>
              <Button leftIcon={<IconCheck size="0.8rem" stroke={1.5} />} color="cyan">
                保存
              </Button>
            </Group>
          </Box>
        </>
      ),
    });

  //ログアウトモーダル
  const openLogoutModal = () =>
    modals.open({
      padding: "0px",
      centered: true,
      radius: 10,
      withCloseButton: false,
      closeOnClickOutside: false,
      children: (
        <>
          <Group position="left" sx={{ height: "100%" }} pt={10} pb={10}>
            <Button variant="subtle" color="dark" onClick={() => modals.closeAll()} w={"20%"}>
              <IconX></IconX>
            </Button>
            <Box w={"75%"}>
              <Text ml={"18%"}>ログアウト</Text>
            </Box>
          </Group>
          <Divider></Divider>
          <Box p={"20px"}>
            <Text my={20}>ログアウトしますか？</Text>
            <Group position="apart">
              <Button onClick={openSettingModal} variant="light" color="gray">
                キャンセル
              </Button>
              <Button color="red">ログアウト</Button>
            </Group>
          </Box>
        </>
      ),
    });

  const openSettingModal = () =>
    modals.open({
      withCloseButton: false,
      padding: "0px",
      centered: true,
      radius: 10,
      closeOnClickOutside: false,
      children: (
        <>
          <Group position="apart" sx={{ height: "100%" }} pt={10} pb={10}>
            <Button variant="subtle" color="dark" onClick={() => modals.closeAll()}>
              <IconX></IconX>
            </Button>
            <Text>プロフィール</Text>
            <Link
              href="/profile"
              onClick={() => {
                close(), modals.closeAll();
              }}
            >
              <Button variant="subtle" color="dark">
                <IconSettings></IconSettings>
              </Button>
            </Link>
          </Group>
          <Divider></Divider>
          {/* TODO: 中身の実装 */}
          {/* ログインしてる時のモーダルコンテンツ */}
          <Box sx={{ width: "100%" }}>
            <NavLink label="ユーザー名" description="hogehoge" icon={<IconUser size="1.5rem" stroke={1.5} />} />
            <NavLink
              label="メールアドレス"
              description="hoge@example.com"
              icon={<IconMail size="1.5rem" stroke={1.5} />}
            />
            <NavLink
              label="性別"
              description="男性"
              icon={
                <>
                  <IconGenderMale height={"1.5rem"} width={"0.75rem"} />
                  <IconGenderFemale height={"1.5rem"} width={"0.75rem"} />
                </>
              }
              rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
              onClick={openGenderModal}
            />
            <NavLink
              label="生年月日"
              description="1999/01/01"
              icon={<IconCake size="1.5rem" stroke={1.5} />}
              rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
              onClick={openBirthdayModal}
            />
            <NavLink
              label="ログアウト"
              icon={<IconLogout size="1.5rem" stroke={1.5} />}
              rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
              active={true}
              color="red"
              py={15}
              onClick={openLogoutModal}
            />
          </Box>
        </>
      ),
    });

  return (
    <>
      <Group position="center">
        <ActionIcon color="cyan" variant="light" onClick={openSettingModal}>
          <IconSettings size="1rem" />
        </ActionIcon>
      </Group>
    </>
  );
};
// ログアウト用modal
export const LogoutModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} centered title="ログアウトしますか？">
        <Text my={20}></Text>
        <Group position="apart">
          <Button onClick={close} variant="light" color="gray">
            キャンセル
          </Button>
          <Button color="red">ログアウト</Button>
        </Group>
      </Modal>

      <NavLink
        label="ログアウト"
        icon={<IconLogout size="1.5rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active={true}
        color="red"
        py={15}
        onClick={open}
      />
    </>
  );
};
