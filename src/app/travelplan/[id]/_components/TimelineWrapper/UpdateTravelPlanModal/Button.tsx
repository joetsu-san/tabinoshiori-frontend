import { Button as MantineButton } from "@mantine/core";
import { ButtonProps } from "@mantine/core";

type Props = ButtonProps & { onClick: () => void };
export const Button = ({ onClick, ...props }: Props) => {
  return <MantineButton onClick={onClick} variant="light" color="cyan" {...props} />;
};
