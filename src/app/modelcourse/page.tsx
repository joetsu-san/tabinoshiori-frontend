"use client";

import { Container, Input, Box, Title } from "@mantine/core";
import { CardsCarousel } from "@/components/CardsCarousel";
import { ModelCourseList } from "@/components/ModelCourseList";
import { IconSearch } from "@tabler/icons-react";
//TODO: バックエンドから取ってくる
import { modelcourselist } from "@/mock/mockdata";

const ModelCourse = () => {
  return (
    <Container size="xl" mt={30}>
      <CardsCarousel />
      <Box>
        <Title size={25} align="center" mt={30}>
          モデルコース一覧
        </Title>
        <Input placeholder="検索" radius={20} icon={<IconSearch color="#eee" />} mt={30} />
        <ModelCourseList modelcourselist={modelcourselist} />
      </Box>
    </Container>
  );
};

export default ModelCourse;
