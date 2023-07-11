import { Header as MantineHeader, Group, Box, LoadingOverlay } from "@mantine/core";
import Image from "next/image";
import { LoginModal } from "./LoginModal";
import { SettingsModal } from "./SettingsModal";
import { useRecoilValue } from "recoil";
import { firebaseUserIdState } from "@/atoms";
import { useEffect } from "react";

export const Header = () => {
  const userId = useRecoilValue(firebaseUserIdState);
  const isLoggedIn = userId != null;

  // if (!userId)
  //   return (
  //     <Box h={"100vh"} maw={400} pos="relative">
  //       <LoadingOverlay visible={true} zIndex={1}></LoadingOverlay>
  //     </Box>
  //   );

  return (
    <Box>
      <MantineHeader height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Image src="/logo.svg" alt="上越旅のしおり ロゴ" width={130} height={37} priority />

          {isLoggedIn ? <SettingsModal /> : <LoginModal />}
        </Group>
      </MantineHeader>
    </Box>
  );
};
