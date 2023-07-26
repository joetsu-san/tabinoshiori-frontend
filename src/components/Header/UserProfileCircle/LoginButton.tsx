import { Button, Group } from "@mantine/core";
import { LoginModal } from "./LoginModal";
import { useDisclosure } from "@mantine/hooks";

export const LoginButton = () => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <Group position="center">
      <Button color="cyan" onClick={open} size="xs">
        ログイン
      </Button>
      <LoginModal opened={opened} onClose={close} />
    </Group>
  );
};
