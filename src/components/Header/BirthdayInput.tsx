import { Text, Group, Select } from "@mantine/core";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const BirthdayInput = ({
  defaultYear,
  defaultMonth,
  defaultDay,
  setBirthday,
}: {
  defaultYear?: string | undefined;
  defaultMonth?: string | undefined;
  defaultDay?: string | undefined;
  setBirthday: Dispatch<SetStateAction<string | undefined>>;
}) => {
  const today = new Date();
  const [selectyear, setYear] = useState<string>(defaultYear || `${today.getFullYear()}`);
  const [selectmonth, setMonth] = useState<string>(defaultMonth || "1");
  const [selectday, setSelectDay] = useState<string>(defaultDay || "0");

  useEffect(() => {
    setBirthday(`${selectyear}-${selectmonth}-${selectday}`);
  }, [selectday, selectmonth, selectyear, setBirthday]);

  // 年
  const year = Array(100)
    .fill(0)
    .map((_, index) => `${today.getFullYear() - index}`);
  // 月
  const month = Array(12)
    .fill(0)
    .map((_, index) => `${index + 1}`);

  const handleYearChange = (selectedYear: string | null) => {
    if (!selectedYear) return;
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

  const handleMonthChange = (selectedMonth: string | null) => {
    if (!selectedMonth) return;
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

  const handleDayChange = (selectedDay: string | null) => {
    if (!selectedDay) return;
    setSelectDay(selectedDay);
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
          searchable
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
        {/* <Text mx={-10}>年</Text> */}
        <Select
          searchable
          size="xs"
          data={month}
          placeholder="月"
          dropdownComponent="div"
          style={{ width: "4rem" }}
          maxDropdownHeight={100}
          defaultValue={defaultMonth}
          onChange={(selectedMonth) => handleMonthChange(selectedMonth)}
        />
        {/* <Text mx={-10}>月</Text> */}
        <Select
          searchable
          id="day"
          size="xs"
          data={day}
          placeholder="日"
          dropdownComponent="div"
          style={{ width: "4rem" }}
          maxDropdownHeight={100}
          defaultValue={defaultDay}
          // value={selectday}
          onChange={(selectedDay) => handleDayChange(selectday)}
        />
        {/* <Text mx={-10}>日</Text> */}
      </Group>
    </>
  );
};
