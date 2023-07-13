import { firebaseUserState } from "@/atoms";
import { Avatar, Box, BoxProps, Group } from "@mantine/core";
import { useRecoilValue } from "recoil";
import { LoginButton } from "./LoginButton";
import { useDisclosure } from "@mantine/hooks";
import { UserProfileModal } from "../UserProfileModal/UserProfileModal";

export const UserProfileCircle = ({ ...props }: BoxProps) => {
  const firebaseProfile = useRecoilValue(firebaseUserState);
  const [opened, { close, open }] = useDisclosure();

  return (
    <Box {...props}>
      {firebaseProfile ? (
        <Group position="center">
          <Avatar
            onClick={open}
            src={firebaseProfile.photoURL}
            alt={firebaseProfile.displayName ?? "プロフィール"}
            radius="xl"
          />
          <UserProfileModal opened={opened} onClose={close} onOpen={open} />
        </Group>
      ) : (
        <LoginButton />
      )}
    </Box>
  );
};
