"use client";

import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { Center, Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const BirthDay = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <Center h={100}>
        <DatePickerInput
          label="生年月日"
          placeholder="生年月日を選択してください"
          value={value}
          onChange={setValue}
          mx="auto"
          miw={250}
          required
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

export default BirthDay;
