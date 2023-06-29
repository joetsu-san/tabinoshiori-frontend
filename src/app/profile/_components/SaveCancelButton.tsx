import { Group, Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";

export const SaveCancelButton = () => {
  return (
    <Group position="apart">
      <Link href="/profile">
        <Button variant="light" color="gray">
          キャンセル
        </Button>
      </Link>
      <Button leftIcon={<IconCheck size="0.8rem" stroke={1.5} />} color="cyan">
        保存
      </Button>
    </Group>
  );
};
