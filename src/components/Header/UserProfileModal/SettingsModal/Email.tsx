import { NavLink } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";

type Props = {
  email: string;
};
export const Email = ({ email }: Props) => {
  return <NavLink h="3rem" label="メールアドレス" description={email} icon={<IconMail size="1.5rem" stroke={1.5} />} />;
};
