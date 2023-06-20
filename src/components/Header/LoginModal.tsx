import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, ButtonProps, Center, Image } from "@mantine/core";

export function GoogleButton(props: ButtonProps) {
  return <Button variant="default" color="gray" {...props} />;
}

export const LoginModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal title="ログイン・登録" opened={opened} onClose={close} centered>
        {/* TODO: 中身の実装 */}
        {/* ログインしてない時のモーダルコンテンツ */}
        <Center h={100}>
          <GoogleButton leftIcon={<Image src="/google-icon.svg" alt="google logo" height={20}></Image>}>
            Login with Google
          </GoogleButton>
        </Center>
      </Modal>

      <Group position="center">
        <Button color="cyan" onClick={open}>
          ログイン
        </Button>
      </Group>
    </>
  );
};
