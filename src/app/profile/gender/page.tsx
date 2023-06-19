"use client";

import { Title, Center, Select, Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const Gender = () => {
  return (
    <>
      <Center h={100}>
        <Select
          label="性別"
          placeholder="性別を選択してください"
          data={[
            { value: "male", label: "男性" },
            { value: "female", label: "女性" },
            { value: "other", label: "その他" },
          ]}
          required
          size="md"
          maw={500}
        />
      </Center>
      <Center>
        <Button leftIcon={<IconCheck size="0.8rem" stroke={1.5} />} color="dark">
          保存
        </Button>
      </Center>
    </>
  );
};

export default Gender;
