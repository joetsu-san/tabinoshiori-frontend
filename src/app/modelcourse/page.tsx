"use client";

import { Container, Input, Box, Flex, ActionIcon } from "@mantine/core";
import { LoadingDisplay } from "@/components/LoadingDisplay";
import { CardsCarousel } from "@/components/CardsCarousel";
import { ModelCourseList } from "@/components/ModelCourseList";
import { IconSearch, IconX } from "@tabler/icons-react";
import { useModelCourseList } from "@/hooks/useModelCourseList";
import { useEffect, useState } from "react";
import { ModelCourseOverview } from "../../../api/@types";

const ModelCourse = () => {
  const { data, error } = useModelCourseList();
  const [listData, setListData] = useState<ModelCourseOverview[]>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [msg, setMsg] = useState(false);
  useEffect(() => {
    console.log(error);
    setListData(data);
  }, [data, error]);
  const searchList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setListData(data);
    if (
      data?.filter((values, index) => {
        if (values.title.indexOf(e.target.value) !== -1) {
          return values;
        }
      }).length === 0
    ) {
      setMsg(true);
    } else {
      setMsg(false);
    }
  };
  const searchRiset = () => {
    setSearchValue("");
    setListData(data);
  };
  return (
    <Container size="xl" mt={30}>
      {!listData ? (
        <LoadingDisplay />
      ) : (
        <>
          <CardsCarousel data={listData} />
          <Box>
            <Input
              placeholder="検索"
              radius={20}
              icon={<IconSearch color="#eee" style={{ zIndex: 0 }} />}
              mt={30}
              onChange={searchList}
              value={searchValue}
              rightSection={
                <ActionIcon onClick={searchRiset}>
                  <IconX />
                </ActionIcon>
              }
              pos="sticky"
              top={20}
              size="md"
              style={{ zIndex: 100 }}
            />
            <ModelCourseList ser={searchValue} modelcourselist={listData} msg={msg} />
          </Box>
        </>
      )}
    </Container>
  );
};

export default ModelCourse;
