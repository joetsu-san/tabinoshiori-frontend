import { firebaseUserState } from "@/atoms";
import { firebaseSignOut } from "@/lib/firebase";
import { Box, NavLink, Text } from "@mantine/core";
import { OpenConfirmModal } from "@mantine/modals/lib/context";
import { IconChevronRight, IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

type Props = {
  rootOpen: () => void;
  rootClose: () => void;
  openConfirmModal: (payload_0: OpenConfirmModal) => void;
};
export const Logout = ({ rootOpen, openConfirmModal, rootClose }: Props) => {
  const router = useRouter();
  const setUserProfile = useSetRecoilState(firebaseUserState);
  const handleSubmit = () => {
    firebaseSignOut();
    setUserProfile(undefined);
    router.replace("/");
  };

  const open = () => {
    rootClose();
    openConfirmModal({
      title: "ログアウト",
      labels: { confirm: "ログアウト", cancel: "キャンセル" },
      centered: true,
      children: (
        <Box p={"20px"}>
          <Text my={20}>ログアウトしますか？</Text>
        </Box>
      ),
      closeButtonProps: {
        variant: "light",
        color: "gray",
      },
      confirmProps: {
        color: "cyan",
      },
      onConfirm: () => {
        handleSubmit();
      },
      onCancel: () => {
        rootOpen();
      },
    });
  };

  return (
    <Box>
      <NavLink
        h="3rem"
        label="ログアウト"
        icon={<IconLogout size="1.5rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        onClick={open}
        py={15}
      />
    </Box>
  );
};
