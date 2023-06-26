"use client";

import { useState } from "react";
import { Box, Title } from "@mantine/core";
import { BirthdayInput } from "../../../components/Header/BirthdayInput";
import { SaveCancelButton } from "../_components/SaveCancelButton";

const BirthDay = () => {
  const [year, setValue] = useState<string | undefined>(undefined);
  const [month, setMonth] = useState<string | undefined>(undefined);
  const [day, setDay] = useState<string | undefined>(undefined);

  return (
    <>
      <Box mx={"10%"}>
        <Title order={3} my={20}>
          生年月日変更
        </Title>
        <BirthdayInput defaultYear={year} defaultMonth={month} defaultDay={day} />
        <SaveCancelButton />
      </Box>
    </>
  );
};

export default BirthDay;
