import { Box, Modal, Loader } from "@mantine/core";
import { Birthday, DeleteAccount, Email, Gender, Logout, Username } from "./SettingsModal";
import { useRecoilValue } from "recoil";
import { firebaseUserState } from "@/atoms";
import useAspidaSWR from "@aspida/swr";
import { client } from "@/lib/aspida";
import { modals } from "@mantine/modals";

type Props = {
  opened: boolean;
  onClose: () => void;
  onOpen: () => void;
};
export const UserProfileModal = ({ opened, onClose, onOpen }: Props) => {
  const currentUser = useRecoilValue(firebaseUserState);
  const { data: userData, isLoading: userIsLoading } = useAspidaSWR(client.user);
  const { data: genderData, isLoading: genderIsLoading } = useAspidaSWR(client.gender);

  const { openConfirmModal } = modals;

  return (
    <Modal opened={opened} onClose={onClose} title="プロフィール" centered>
      {genderIsLoading || userIsLoading || !genderData || !userData || !currentUser ? (
        <Loader />
      ) : (
        <Box sx={{ width: "100%" }}>
          <Username username={currentUser.displayName ?? ""} />
          <Email email={currentUser.email ?? ""} />
          <Gender
            genderId={userData.genderId}
            openConfirmModal={openConfirmModal}
            rootOpen={onOpen}
            rootClose={onClose}
          />
          <Birthday
            birthday={userData.birthday}
            openConfirmModal={openConfirmModal}
            rootOpen={onOpen}
            rootClose={onClose}
          />
          <Logout openConfirmModal={openConfirmModal} rootOpen={onOpen} rootClose={onClose} />
          <DeleteAccount openConfirmModal={openConfirmModal} rootOpen={onOpen} rootClose={onClose} />
        </Box>
      )}
    </Modal>
  );
};
