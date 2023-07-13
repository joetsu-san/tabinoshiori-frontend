import { Select } from "@mantine/core";

export const GenderInput = ({ defaultGender }: { defaultGender?: Number }) => {
  return (
    <Select
      placeholder="性別を選択してください"
      data={[
        { value: "1", label: "男性" },
        { value: "2", label: "女性" },
        { value: "3", label: "その他" },
      ]}
      mt={10}
      mb={"80px"}
      defaultValue={defaultGender?.toString()}
    />
  );
};
