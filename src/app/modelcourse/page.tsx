"use client";

import { Container, Input, Box, ActionIcon } from "@mantine/core";
import { LoadingDisplay } from "@/components/LoadingDisplay";
import { ModelCourseList } from "@/app/modelcourse/_components/ModelCourseList";
import { IconSearch, IconX } from "@tabler/icons-react";
import { useModelCourseList } from "@/hooks/useModelCourseList";
import { useState } from "react";
import { CardsCarousel } from "./_components/CardsCarousel";

const ModelCourse = () => {
  const { data, error } = useModelCourseList();
  const [searchValue, setSearchValue] = useState<string>("");

  const searchList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const searchReset = () => {
    setSearchValue("");
  };
  return (
    <Container size="xl" mt={30}>
      {!data ? (
        <LoadingDisplay />
      ) : (
        <>
          <CardsCarousel data={data} />
          <Box>
            <Input
              placeholder="検索"
              radius={20}
              icon={<IconSearch color="#eee" style={{ zIndex: 0 }} />}
              mt={30}
              onChange={searchList}
              value={searchValue}
              rightSection={
                <ActionIcon onClick={searchReset}>
                  <IconX />
                </ActionIcon>
              }
              pos="sticky"
              top={20}
              size="md"
              style={{ zIndex: 100 }}
            />
            <ModelCourseList ser={searchValue} modelcourselist={data} />
          </Box>
        </>
      )}
    </Container>
  );
};

export default ModelCourse;
