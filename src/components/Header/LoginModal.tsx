import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, ButtonProps, Center, Image } from "@mantine/core";
import { sign } from "crypto";
import { auth, firebaseSignIn } from "@/lib/firebase";
import axios from "axios";
import { client, requestConfig } from "@/lib/aspida";

export const GoogleButton = (props: ButtonProps) => {
  const handleLogin = async () => {
    const [token, displayName] = await firebaseSignIn();
    const name = auth.currentUser?.displayName;
    if (name == null) return;

    const user = await client.user.$post({
      config: { headers: { Authorization: `Bearer ${token}` } },
      body: {
        name: name,
        birthday: "0000-00-00",
        genderId: 1,
      },
    });
  };

  return <Button variant="default" color="gray" {...props} onClick={handleLogin} />;
};

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
        <Button color="cyan" onClick={open} size="xs" compact fz={"0.1rem"}>
          ログイン
        </Button>
      </Group>
    </>
  );
};
