import { Header as MantineHeader, Group, Box } from "@mantine/core";
import Image from "next/image";
import { LoginModal } from "./LoginModal";
import { SettingsModal } from "./SettingsModal";

export const Header = () => {
  // TODO: ログインしてるかどうか。後で変える
  const isLoggedIn = false;
  return (
    <Box>
      <MantineHeader height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Image src="/logo.svg" alt="上越旅のしおり ロゴ" width={130} height={37} priority />

          {/* TODO: ログインしているかしていないかで条件分岐させる */}
          {isLoggedIn ? <SettingsModal /> : <SettingsModal />}
          {/* {isLoggedIn ? <SettingsModal /> : <LoginModal />} */}
        </Group>
      </MantineHeader>
    </Box>
  );
};
