import { Box, NavLink } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

type Props = {
  username: string;
};
export const Username = ({ username }: Props) => {
  return <NavLink h="3rem" label="ユーザー名" description={username} icon={<IconUser size="1.5rem" stroke={1.5} />} />;
};
