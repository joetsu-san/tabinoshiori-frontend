"use client";

import Link from "next/link";
import { Box, NavLink } from "@mantine/core";
import { IconPencil, IconUser, IconMail, IconCake, IconGenderMale, IconGenderFemale } from "@tabler/icons-react";
import { Deletemodal, LogoutModal } from "@/components/Header/SettingsModal";

const Profile = () => {
  return (
    <>
      <Box>
        <NavLink label="ユーザー名" icon={<IconUser size="1.5rem" stroke={1.5} />} />
        <NavLink label="メールアドレス" icon={<IconMail size="1.5rem" stroke={1.5} />} />
        <Link href="/profile/gender">
          <NavLink
            label="性別"
            icon={
              <>
                <IconGenderMale height={"1.5rem"} width={"0.75rem"} />
                <IconGenderFemale height={"1.5rem"} width={"0.75rem"} />
              </>
            }
            rightSection={<IconPencil size="0.8rem" stroke={1.5} />}
          />
        </Link>
        <Link href="/profile/birthday">
          <NavLink
            label="生年月日"
            icon={<IconCake size="1.5rem" stroke={1.5} />}
            rightSection={<IconPencil size="0.8rem" stroke={1.5} />}
          />
        </Link>
        <LogoutModal></LogoutModal>
        <Deletemodal></Deletemodal>
      </Box>
    </>
  );
};

export default Profile;
