import { LoadingOverlay, Box } from "@mantine/core";

export const LoadingDisplay = () => {
  return (
    <Box h={"calc(100vh - 12rem)"} maw={400} pos="relative">
      <LoadingOverlay visible={true} zIndex={1}></LoadingOverlay>
    </Box>
  );
};
