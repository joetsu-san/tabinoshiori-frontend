import { Avatar, Box, Group, Text } from "@mantine/core";
import { useCallback } from "react";

type Props = {
  id: string;
  imageSrc: string;
  title: string;
  onClick: (id: string, imageSrc: string) => void;
};
export const TourismSpotSelectItem = ({ id, imageSrc, title, onClick }: Props) => {
  // TODO: onClick doesn't work
  const handleClick = useCallback(() => {
    onClick(id, imageSrc);
  }, [id, imageSrc, onClick]);

  return (
    <Box onClick={handleClick}>
      <Group noWrap>
        <Avatar src={imageSrc} />
        <Box>
          <Text size="sm">{title}</Text>
        </Box>
      </Group>
    </Box>
  );
};
