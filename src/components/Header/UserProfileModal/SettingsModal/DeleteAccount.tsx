import { Box, NavLink, Text } from "@mantine/core";
import { OpenConfirmModal } from "@mantine/modals/lib/context";
import { IconChevronRight, IconTrash } from "@tabler/icons-react";

type Props = {
  rootOpen: () => void;
  rootClose: () => void;
  openConfirmModal: (payload_0: OpenConfirmModal) => void;
};
export const DeleteAccount = ({ rootOpen, rootClose, openConfirmModal }: Props) => {
  const open = () => {
    rootClose();
    openConfirmModal({
      title: "アカウントを削除",
      labels: { confirm: "削除", cancel: "キャンセル" },
      children: (
        <Box p={"20px"}>
          <Text my={20}>アカウント削除してもよろしいですか？</Text>
        </Box>
      ),
      closeButtonProps: {
        variant: "light",
        color: "gray",
      },
      confirmProps: {
        color: "cyan",
      },
      onClose: () => {
        rootOpen();
      },
    });
  };

  return (
    <NavLink
      h="3rem"
      label="アカウント削除"
      icon={<IconTrash size="1.5rem" stroke={1.5} />}
      rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      onClick={open}
      active={true}
      color="red"
      py={15}
      variant="filled"
    />
  );
};
