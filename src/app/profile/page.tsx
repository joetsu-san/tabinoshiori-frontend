"use client";

import { Box, NavLink } from "@mantine/core";
import { IconPencil, IconChevronRight, IconUser, IconMail, IconCake, IconLogout } from "@tabler/icons-react";

const Profile = () => {
  return (
    <>
      <Box>
        <NavLink label="ユーザー名" description="hogehoge" icon={<IconUser size="1.5rem" stroke={1.5} />} />
        <NavLink label="メールアドレス" description="hoge@example.com" icon={<IconMail size="1.5rem" stroke={1.5} />} />
        <NavLink
          component="a"
          href="/profile/gender"
          label="性別"
          description="男性"
          rightSection={<IconPencil size="0.8rem" stroke={1.5} />}
        />
        <NavLink
          label="生年月日"
          description="1999/01/01"
          icon={<IconCake size="1.5rem" stroke={1.5} />}
          rightSection={<IconPencil size="0.8rem" stroke={1.5} />}
        />
        <NavLink
          label="ログアウト"
          icon={<IconLogout size="1.5rem" stroke={1.5} />}
          rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
          active={true}
          color="red"
        />
      </Box>
    </>
  );
};

export default Profile;
