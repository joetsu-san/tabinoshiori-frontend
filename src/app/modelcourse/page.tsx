"use client";

import { Container, Input, Box, Title, Loader, Flex, ActionIcon } from "@mantine/core";
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
  useEffect(() => {
    console.log(data);
    console.log(error);
    setListData(data);
  }, [data, error]);
  const searchList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setListData(
      data?.filter((values, index) => {
        if (values.title.indexOf(e.target.value) !== -1) {
          return values;
        }
      })
    );
  };
  const searchRiset = () => {
    setSearchValue("");
    setListData(
      data?.filter((values, index) => {
        if (values.title.indexOf("") !== -1) {
          return values;
        }
      })
    );
  };
  return (
    <Container size="xl" mt={30}>
      {!listData ? (
        <Flex align="center">
          <Loader size={75} color="#66D9E8" style={{ display: "block", margin: "200px auto 0 auto" }} />
        </Flex>
      ) : (
        <>
          <CardsCarousel />
          <Box>
            <Title size={25} align="center" mt={30}>
              モデルコース一覧
            </Title>
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
            <ModelCourseList modelcourselist={listData} msg={listData.length === 0 ? true : false} />
          </Box>
        </>
      )}
    </Container>
  );
};

export default ModelCourse;
