"use client";

import Link from "next/link";
import { Box, Group, Select, Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const Gender = () => {
  return (
    <>
      <Box mx={"20%"}>
        <Select
          label="性別"
          placeholder="性別を選択してください"
          data={[
            { value: "male", label: "男性" },
            { value: "female", label: "女性" },
            { value: "other", label: "その他" },
          ]}
          required
          my={30}
        />
        <Group position="apart">
          <Link href="/profile">
            <Button color="dark">キャンセル</Button>
          </Link>
          <Button leftIcon={<IconCheck size="0.8rem" stroke={1.5} />} color="dark">
            保存
          </Button>
        </Group>
      </Box>
    </>
  );
};

export default Gender;
