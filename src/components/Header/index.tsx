import { Header as MantineHeader, Group, Box } from "@mantine/core";
import Image from "next/image";
import { UserProfileCircle } from "./UserProfileCircle";

export const Header = () => {
  return (
    <Box>
      <MantineHeader height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Image src="/logo.svg" alt="上越旅のしおり ロゴ" width={130} height={37} priority />
          <UserProfileCircle />
        </Group>
      </MantineHeader>
    </Box>
  );
};
