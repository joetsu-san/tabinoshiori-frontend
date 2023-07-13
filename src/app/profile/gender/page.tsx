"use client";

import { Box, Title } from "@mantine/core";
import { GenderInput } from "../../../components/Header/GenderInput";
import { SaveCancelButton } from "../_components/SaveCancelButton";
import { useState } from "react";

const Gender = () => {
  const [defaultGender, setGender] = useState<Number | undefined>(undefined);
  return (
    <>
      <Box mx={"10%"}>
        <Title order={3} my={20}>
          性別変更
        </Title>
        <GenderInput defaultGender={defaultGender} />
        <SaveCancelButton />
      </Box>
    </>
  );
};

export default Gender;
