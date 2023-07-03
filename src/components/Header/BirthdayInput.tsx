import { Text, Group, Select } from "@mantine/core";
import { useEffect, useState } from "react";

export const BirthdayInput = ({
  defaultYear,
  defaultMonth,
  defaultDay,
}: {
  defaultYear?: string | undefined;
  defaultMonth?: string | undefined;
  defaultDay?: string | undefined;
}) => {
  const [selectyear, setYear] = useState<string>(defaultYear || "2030");
  const [selectmonth, setMonth] = useState<string>(defaultMonth || "1");
  const [selectday, setSelectDay] = useState<string>(defaultDay || "0");

  // 年
  const year = Array(130)
    .fill(0)
    .map((_, index) => `${2030 - index}`);
  // 月
  const month = Array(12)
    .fill(0)
    .map((_, index) => `${index + 1}`);

  const handleYearChange = (selectedYear: string) => {
    setYear(selectedYear);
    const maxDays = new Date(parseInt(selectedYear), parseInt(selectmonth), 0).getDate();
    const updatedDay = Array(maxDays)
      .fill(0)
      .map((_, index) => `${index + 1}`);
    if (maxDays < parseInt(selectday)) {
      setSelectDay("0");
    }
    setDay(updatedDay);
  };

  const handleMonthChange = (selectedMonth: string) => {
    setMonth(selectedMonth);
    const maxDays = new Date(parseInt(selectyear), parseInt(selectedMonth), 0).getDate();
    const updatedDay = Array(maxDays)
      .fill(0)
      .map((_, index) => `${index + 1}`);
    if (maxDays < parseInt(selectday)) {
      setSelectDay("0");
    }
    setDay(updatedDay);
  };

  const [day, setDay] = useState<string[]>([]);

  useEffect(() => {
    if (defaultMonth) {
      handleMonthChange(defaultMonth);
    }
  }, []);

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
          onChange={(selectedYear) => handleYearChange(selectedYear)}
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
          onChange={(selectedMonth) => handleMonthChange(selectedMonth)}
        />
        <Text mx={-10}>月</Text>
        <Select
          id="day"
          size="xs"
          data={day}
          placeholder="日"
          dropdownComponent="div"
          style={{ width: "4rem" }}
          maxDropdownHeight={100}
          defaultValue={defaultDay}
          value={selectday}
          onChange={(selectedDay) => setSelectDay(selectedDay)}
        />
        <Text mx={-10}>日</Text>
      </Group>
    </>
  );
};
