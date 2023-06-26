import { Text, Group, Select } from "@mantine/core";

export const BirthdayInput = ({
  defaultYear,
  defaultMonth,
  defaultDay,
}: {
  defaultYear?: string;
  defaultMonth?: string;
  defaultDay?: string;
}) => {
  //年
  const year = Array(130)
    .fill(0)
    .map((_, index) => `${2030 - index}`);
  //月
  const month = Array(12)
    .fill(0)
    .map((_, index) => `${index + 1}`);
  //日
  const day = Array(31)
    .fill(0)
    .map((_, index) => `${index + 1}`);

  return (
    <>
      <Group mb={80}>
        <Select
          data={year}
          placeholder="年"
          dropdownComponent="div"
          style={{ width: "5rem" }}
          rightSection={false}
          size="xs"
          maxDropdownHeight={100}
          defaultValue={defaultYear}
        />
        <Text mx={-10}>年</Text>
        <Select
          size="xs"
          data={month}
          placeholder="月"
          dropdownComponent="div"
          style={{ width: "4rem" }}
          maxDropdownHeight={100}
          defaultValue={defaultMonth}
        />
        <Text mx={-10}>月</Text>
        <Select
          size="xs"
          data={day}
          placeholder="日"
          dropdownComponent="div"
          style={{ width: "4rem" }}
          maxDropdownHeight={100}
          defaultValue={defaultDay}
        />
        <Text mx={-10}>日</Text>
      </Group>
    </>
  );
};
