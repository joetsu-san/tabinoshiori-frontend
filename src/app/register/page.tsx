"use client";

import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { Center, Select, Button } from "@mantine/core";

const Register = () => {
  const [value, setValue] = useState<Date | null>(null);
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
          miw={250}
        />
      </Center>
      <Center h={100}>
        <DatePickerInput
          label="生年月日"
          placeholder="生年月日を選択してください"
          value={value}
          onChange={setValue}
          miw={250}
          required
        />
      </Center>
      <Center>
        <Button component="a" href="/register/complete" color="dark">
          登録
        </Button>
      </Center>
    </>
  );
};

export default Register;
