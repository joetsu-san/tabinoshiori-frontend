"use client";

import { client } from "@/hooks/useAspidaSWRImmutable";
import useAspidaSWR from "@aspida/swr";
import { Card, Image, Text, Button, Group, Input, Grid, Container, Flex } from "@mantine/core";
import { IconArrowBackUp, IconPlus } from "@tabler/icons-react";
import Link from "next/link";

const ModelCourse = () => {
  const { data, error } = useAspidaSWR(client.model_course);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Container size={"xl"}>
        <Flex direction={"column"} align={"center"}>
          <Text size={"lg"} mt={20} mb={20}>
            モデルコース一覧
          </Text>
        </Flex>

        <Flex direction={"row"} justify={"space-between"} mb={20}>
          <Link href={"/management"}>
            <Button variant="stable" leftIcon={<IconArrowBackUp />}>
              戻る
            </Button>
          </Link>

          <Link href={"/management/model_course/register"}>
            <Button variant="filled" leftIcon={<IconPlus />}>
              モデルコース追加
            </Button>
          </Link>
        </Flex>
        <Grid>
          {data.map((val, i) => {
            return (
              <Grid.Col key={i} md={6} lg={3}>
                <Link href={`/management/model_course/${val.id}`}>
                  <Card shadow="sm" padding="sm" radius="md" withBorder key={i}>
                    <Card.Section>
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        }
                        height={160}
                        alt="Norway"
                      />
                    </Card.Section>

                    <Text weight={500}>{val.title}</Text>
                  </Card>
                </Link>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default ModelCourse;

export const modelcourselist = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "#上越もよう おすすめお出かけプラン",
    description:
      "当市のスポットを巡る「お出かけプラン」をインスタグラムで募集するキャンペーンを実施し、市民や上越市にお越しのみなさんから投稿いただいたプランをご紹介します。",
    requiredMinute: "1時間",
  },
  {
    id: "2",
    title: "サクラ咲く！春爛漫コース",
    description:
      "日本三大夜桜のひとつに称される高田城址公園の桜をはじめ、城下町高田には徒歩圏内にさまざまな桜の名所が存在します。地元スタッフおすすめの、隠れた名所を散策してみてください。",
    requiredMinute: "2時間",
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    title: "城下町高田さんぽ",
    description:
      "慶長19年（1614年）の高田城築城とともに造られた城下町高田。平成26年（2014年）に開府400年を迎えたこの地には、今も城下町の風情を残す町家と、雁木の街並みが残ります。歴史の香り漂う城下町で、四季折々の風情を味わってみませんか。",
    requiredMinute: "5時間",
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    title: "春日山城じっくり堪能コース",
    description:
      "上杉謙信公が居城としていた天下の名城・春日山城。標高180mの山の地形を生かした天然の要害には、今なお土塁や空堀などの遺構が数多く残っています。当時に思いを馳せながら、城跡に点在する遺構を巡ることで、壮大な戦国ロマンを体感することができます。",
    requiredMinute: "0.5時間",
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "5",
    title: "わくわく学習コース",
    description:
      "上杉謙信公が居城としていた天下の名城・春日山城。標高180mの山の地形を生かした天然の要害には、今なお土塁や空堀などの遺構が数多く残っています。当時に思いを馳せながら、城跡に点在する遺構を巡ることで、壮大な戦国ロマンを体感することができます。",
    requiredMinute: "3.5時間",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "6",
    title: "上杉謙信公ゆかりの地めぐり",
    description:
      "上杉謙信公は、越後守護代であった長尾為景（ながおためかげ）の末子として誕生。幼名を虎千代と名乗りました。謙信公の戦歴は、元服をした天文12（1543）年に始まります。以降、武田晴信（信玄）や北条氏康、織田信長といった戦国時代の名将と戦を重ねましたが、その戦いは欲によるものではなく、義を重んじ出兵したものだったといわれています。",
    requiredMinute: "2時間",
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
];
