import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Box, NavLink, Button, Text, Divider, Image, Avatar } from "@mantine/core";
import { modals } from "@mantine/modals";
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
  IconTrash,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { auth, firebaseSignOut } from "@/lib/firebase";
import { useRecoilValue } from "recoil";
import { firebaseUserState } from "@/atoms";
import { useRouter } from "next/navigation";
import { useUserData } from "@/hooks/useUserData";
import { firebaseUserIdState } from "@/atoms";
export const SettingsModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const [defaultGender, setGender] = useState<Number | undefined>(undefined);

  const [defaultYear, setYear] = useState<string | undefined>(undefined);
  const [defaultMonth, setMonth] = useState<string | undefined>(undefined);
  const [defaultDay, setDay] = useState<string | undefined>(undefined);
  const [defaultBirthday, setBirthday] = useState<string | undefined>(undefined);

  const userInfo = useRecoilValue(firebaseUserState);

  const { data, error } = useUserData();

  useEffect(() => {
    if (data) {
      setGender(data.genderId);
      if (data.birthday) {
        const birthday = data.birthday.split("T")[0];
        setBirthday(birthday);
        setYear(parseInt(birthday.split("-")[0]).toString());
        setMonth(parseInt(birthday.split("-")[1]).toString());
        setDay(parseInt(birthday.split("-")[2]).toString());
      } else {
        setBirthday("未設定");
      }
    }
  }, [data, error]);

  const replaceGenderIdtoGender = (genderId: Number | undefined) => {
    switch (genderId) {
      case 1:
        return "男性";
      case 2:
        return "女性";
      case 3:
        return "その他";
      default:
        return "未設定";
    }
  };

  const handleLogout = () => {
    firebaseSignOut();
    modals.closeAll();
    router.push("/tourismspot");
  };

  const handleDelete = () => {
    // firebaseSignOut();
    modals.closeAll();
    router.push("/tourismspot");
  };

  // 性別変更モーダル
  const openGenderModal = () =>
    modals.open({
      padding: "0px",
      centered: true,
      radius: 10,
      withCloseButton: false,
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
              <Button
                variant="light"
                color="gray"
                onClick={() => {
                  modals.closeAll();
                  openSettingModal();
                }}
              >
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
              <Button
                variant="light"
                color="gray"
                onClick={() => {
                  modals.closeAll();
                  openSettingModal();
                }}
              >
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
              <Button
                onClick={() => {
                  modals.closeAll();
                  openSettingModal();
                }}
                variant="light"
                color="gray"
              >
                キャンセル
              </Button>
              <Button color="red" onClick={handleLogout}>
                ログアウト
              </Button>
            </Group>
          </Box>
        </>
      ),
    });

  //アカウント削除モーダル
  const openDeleteModal = () =>
    modals.open({
      padding: "0px",
      centered: true,
      radius: 10,
      withCloseButton: false,
      children: (
        <>
          <Group position="left" sx={{ height: "100%" }} pt={10} pb={10}>
            <Button variant="subtle" color="dark" onClick={() => modals.closeAll()} w={"20%"}>
              <IconX></IconX>
            </Button>
            <Box w={"75%"}>
              <Text ml={"18%"}>アカウント削除</Text>
            </Box>
          </Group>
          <Divider></Divider>
          <Box p={"20px"}>
            <Text my={20}>アカウント削除してもよろしいですか？</Text>
            <Group position="apart">
              <Button
                onClick={() => {
                  modals.closeAll();
                  openSettingModal();
                }}
                variant="light"
                color="gray"
              >
                キャンセル
              </Button>
              <Button color="red" onClick={handleDelete}>
                削除
              </Button>
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
            <NavLink
              label="ユーザー名"
              description={userInfo?.displayName}
              icon={<IconUser size="1.5rem" stroke={1.5} />}
            />
            <NavLink
              label="メールアドレス"
              description={userInfo?.email}
              icon={<IconMail size="1.5rem" stroke={1.5} />}
            />
            <NavLink
              label="性別"
              description={replaceGenderIdtoGender(defaultGender)}
              icon={
                <>
                  <IconGenderMale height={"1.5rem"} width={"0.75rem"} />
                  <IconGenderFemale height={"1.5rem"} width={"0.75rem"} />
                </>
              }
              rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
              onClick={() => {
                modals.closeAll();
                openGenderModal();
              }}
            />
            <NavLink
              label="生年月日"
              description={defaultBirthday}
              // description={data[0].birthday}
              icon={<IconCake size="1.5rem" stroke={1.5} />}
              rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
              onClick={() => {
                modals.closeAll();
                openBirthdayModal();
              }}
            />
            <NavLink
              label="ログアウト"
              icon={<IconLogout size="1.5rem" stroke={1.5} />}
              rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
              active={true}
              color="red"
              py={15}
              onClick={() => {
                modals.closeAll();
                openLogoutModal();
              }}
            />
            <NavLink
              label="アカウント削除"
              icon={<IconTrash size="1.5rem" stroke={1.5} />}
              rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
              active={true}
              color="red"
              py={15}
              variant="filled"
              onClick={() => {
                modals.closeAll();
                openDeleteModal();
              }}
            />
          </Box>
        </>
      ),
    });

  return (
    <>
      <Group position="center">
        <Avatar src={userInfo?.photoURL} alt="avatar" onClick={openSettingModal} radius="xl"></Avatar>
      </Group>
    </>
  );
};
// ログアウト用modal
export const LogoutModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleLogout = () => {
    console.log("ログアウト");
    firebaseSignOut();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered title="ログアウトしますか？">
        <Text my={20}></Text>
        <Group position="apart">
          <Button onClick={close} variant="light" color="gray">
            キャンセル
          </Button>
          <Button color="red" onClick={handleLogout}>
            ログアウト
          </Button>
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
// ユーザー削除用modal
export const Deletemodal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleDelete = () => {
    console.log("削除");
    close();
    // firebaseSignOut();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} centered title="アカウント削除してもよろしいですか？">
        <Text my={20}></Text>
        <Group position="apart">
          <Button onClick={close} variant="light" color="gray">
            キャンセル
          </Button>
          <Button color="red" onClick={handleDelete}>
            削除
          </Button>
        </Group>
      </Modal>

      <NavLink
        label="アカウント削除"
        icon={<IconTrash size="1.5rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active={true}
        variant="filled"
        color="red"
        py={15}
        onClick={open}
      />
    </>
  );
};
