import { CopyButton, ActionIcon, Tooltip, Text, Box, Flex, Image } from "@mantine/core";
import { IconCopy, IconCopyOff, IconDownload, IconTextCaption } from "@tabler/icons-react";
import { RefObject, useEffect } from "react";

type Props = {
  imageRef: RefObject<HTMLDivElement>;
};

export const GenerateImageModalContent = (props: Props) => {
  const { imageRef } = props;

  const handleGenerateImage = (imageRef: RefObject<HTMLDivElement>) => {
    console.log("generate image");
  };

  useEffect(() => {
    handleGenerateImage(imageRef);
  }, [imageRef]);

  return (
    <>
      <Box>
        <Flex align="center" gap="md" mb={8}>
          <ActionIcon color="cyan" size="lg" radius="md" variant="light">
            <IconDownload size="1.5rem" />
          </ActionIcon>
          <Text fw={600}>長押しで画像をダウンロード</Text>
        </Flex>

        <Flex>
          <Image src="" alt="ogp" />
        </Flex>
      </Box>
    </>
  );
};
