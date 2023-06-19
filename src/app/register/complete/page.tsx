"use client";

import { Title, Box, NavLink, Center } from "@mantine/core";
import { IconCalendar, IconTimeline, IconMap, IconChevronRight, IconUser } from "@tabler/icons-react";

const CompleteRegister = () => {
  return (
    <>
      <Center h={100}>
        <div>
          <Title order={3}>登録が完了しました！</Title>
          <Title order={3}>早速使ってみましょう</Title>
        </div>
      </Center>
      <Box>
        <NavLink
          py={10}
          label="観光地を探す"
          icon={<IconMap size="1.5rem" stroke={1.5} />}
          rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        />
        <NavLink
          py={10}
          label="モデルコースを探す"
          icon={<IconTimeline size="1.5rem" stroke={1.5} />}
          rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        />
        <NavLink
          py={10}
          label="旅のしおりを作る"
          icon={<IconCalendar size="1.5rem" stroke={1.5} />}
          rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        />
        <NavLink
          py={10}
          label="プロフィールを確認する"
          icon={<IconUser size="1.5rem" stroke={1.5} />}
          rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        />
      </Box>
    </>
  );
};

export default CompleteRegister;
