import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Box, NavLink, Button, Text, Divider, Select } from "@mantine/core";
import { modals } from "@mantine/modals";
import { ActionIcon } from "@mantine/core";
import {
  IconSettings,
  IconChevronRight,
  IconUser,
  IconMail,
  IconCake,
  IconLogout,
  IconX,
  IconCheck,
} from "@tabler/icons-react";
//年
const year = Array(130)
  .fill(0)
  .map((_, index) => `${2030 - index}`);
//月
const month = Array(12)
  .fill(0)
  .map((_, index) => `${index + 1}`);
//日
const day = Array(31)
  .fill(0)
  .map((_, index) => `${index + 1}`);

export const SettingsModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  // 性別変更モーダル
  const openGenderModal = () =>
    modals.open({
      title: "性別変更",
      padding: "20px",
      centered: true,
      radius: 10,
      withCloseButton: false,
      closeOnClickOutside: false,
      children: (
        <>
          <Select
            label="性別"
            placeholder="性別を選択してください"
            data={[
              { value: "male", label: "男性" },
              { value: "female", label: "女性" },
              { value: "other", label: "その他" },
            ]}
            required
            mt={10}
            mb={"100px"}
          />
          <Group position="apart">
            <Button color="dark" onClick={openSettingModal}>
              キャンセル
            </Button>
            <Button leftIcon={<IconCheck size="0.8rem" stroke={1.5} />} color="dark">
              保存
            </Button>
          </Group>
        </>
      ),
    });

  // 生年月日変更モーダル
  const openBirthdayModal = () =>
    modals.open({
      title: "生年月日変更",
      padding: "20px",
      centered: true,
      radius: 10,
      withCloseButton: false,
      closeOnClickOutside: false,
      children: (
        <>
          <Group mb={80}>
            <Select
              data={year}
              placeholder="年"
              dropdownComponent="div"
              style={{ width: "5rem" }}
              rightSection={false}
              size="xs"
            />
            <Text mx={-10}>年</Text>
            <Select size="xs" data={month} placeholder="月" dropdownComponent="div" style={{ width: "4rem" }} />
            <Text mx={-10}>月</Text>
            <Select size="xs" data={day} placeholder="日" dropdownComponent="div" style={{ width: "4rem" }} />
            <Text mx={-10}>日</Text>
          </Group>
          <Group position="apart">
            <Button color="dark" onClick={openSettingModal}>
              キャンセル
            </Button>
            <Button leftIcon={<IconCheck size="0.8rem" stroke={1.5} />} color="dark">
              保存
            </Button>
          </Group>
        </>
      ),
    });
  //ログアウトモーダル
  const openLogoutModal = () =>
    modals.open({
      padding: "20px",
      centered: true,
      radius: 10,
      withCloseButton: false,
      closeOnClickOutside: false,
      children: (
        <>
          <Text my={20}>ログアウトしますか？</Text>
          <Group position="apart">
            <Button onClick={openSettingModal} color="dark">
              キャンセル
            </Button>
            <Button color="red">ログアウト</Button>
          </Group>
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
          <Group
            position="apart"
            sx={{ height: "100%" }}
            pt={10}
            pb={10}
            style={
              {
                /* backgroundColor:"#D4D0D0" */
              }
            }
          >
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
      {/* <Modal title="プロフィール" opened={opened} onClose={close} centered> */}
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
          <Button onClick={close} color="dark">
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
