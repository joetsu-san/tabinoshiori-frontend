import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";

export const LoginModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} centered>
        {/* TODO: 中身の実装 */}
        ログインしてない時のモーダルコンテンツ
      </Modal>

      <Group position="center">
        <Button color="cyan" onClick={open}>
          ログイン
        </Button>
      </Group>
    </>
  );
};
