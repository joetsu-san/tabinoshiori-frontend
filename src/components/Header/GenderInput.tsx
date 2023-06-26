import { Select } from "@mantine/core";

export const GenderInput = ({ defaultGender }: { defaultGender?: string }) => {
  return (
    <Select
      placeholder="性別を選択してください"
      data={[
        { value: "male", label: "男性" },
        { value: "female", label: "女性" },
        { value: "other", label: "その他" },
      ]}
      mt={10}
      mb={"80px"}
      defaultValue={defaultGender}
    />
  );
};
