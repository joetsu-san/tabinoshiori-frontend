import { Center, Image, Modal } from "@mantine/core";
import { GoogleButton } from "../LoginModal";

type Props = {
  opened: boolean;
  onClose: () => void;
};
export const LoginModal = ({ opened, onClose }: Props) => {
  return (
    <Modal title="ログイン・登録" opened={opened} onClose={onClose} centered>
      <Center h={100}>
        <GoogleButton leftIcon={<Image src="/google-icon.svg" alt="google logo" height={20}></Image>}>
          Login with Google
        </GoogleButton>
      </Center>
    </Modal>
  );
};
