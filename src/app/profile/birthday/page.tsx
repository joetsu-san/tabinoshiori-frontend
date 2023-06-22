"use client";

import Link from "next/link";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { Button, Box, Group } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const BirthDay = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <Box mx={"20%"}>
        <DatePickerInput
          label="生年月日"
          placeholder="生年月日を選択してください"
          value={value}
          onChange={setValue}
          required
          my={30}
          dropdownType="modal"
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

export default BirthDay;
