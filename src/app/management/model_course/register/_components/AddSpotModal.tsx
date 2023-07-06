import { useDebounce } from "@/app/tourismspot/_hooks/useDebounce";
import { SpotList } from "@/atoms/SpotAtoms";
import { client } from "@/hooks/useAspidaSWRImmutable";
import useAspidaSWR from "@aspida/swr";
import { Button, Image, Text, TextInput, NumberInput, Card, Input, Grid, Flex } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconPlus } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { OfficialSpot } from "../../../../../../api/@types";

type ModalProps = {
  modelCourseList: any[];
  dispatch: Dispatch<SetStateAction<any[]>>;
  closeAction: () => void;
};

export const AddSpotModal: React.FC<ModalProps> = ({ modelCourseList, dispatch, closeAction }) => {
  // const spotList = useRecoilValue(SpotList); // 観光地データマスター
  // const [tempSpotList, setTempSpotList] = useState(spotList); // 検索後観光地データ

  // const {data, error} = useAspidaSWRImmutable(
  //   client.official_spot , {}
  // );
  const { data, error } = useAspidaSWR(client.official_spot);

  const [spotList, setSpotList] = useState<OfficialSpot[]>([]);

  const [selectedSpot, setSelectedSpot] = useState<any>({});

  const text = useForm({
    initialValues: {
      description: "",
      stayMinutes: 1,
    },
  });

  // 検索 Debounce
  const [inputText, setInputText] = useState("");
  const debouncedInputText = useDebounce(inputText, 500);
  const handleChange = (event: any) => setInputText(event.target.value);

  // 検索用
  useEffect(() => {
    console.log(`「${debouncedInputText}」`);
    // 観光地検索処理
    if (debouncedInputText != "") {
      const temp = spotList.filter((spot) => spot.title.match(debouncedInputText));
      setSpotList(temp);
    } else {
      if (data) setSpotList(data);
    }
  }, [debouncedInputText]);

  // データ取得用
  useEffect(() => {
    if (data) setSpotList(data);
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const selectSpot = (data: any) => {
    const spotData = {
      officialSpotId: data.id,
      title: data.title,
    };
    setSelectedSpot(spotData);
  };

  const setSpot = (formValues: any) => {
    const hoge = {
      description: formValues.description,
      stayMinutes: formValues.stayMinutes,
      selectSpot: selectedSpot,
    };
    dispatch([...modelCourseList, hoge]);
    closeAction();
  };

  return (
    <form onSubmit={text.onSubmit((value) => setSpot(value))}>
      <TextInput label="備考" {...text.getInputProps("description")} />
      <NumberInput label="滞在時間" mb={20} {...text.getInputProps("stayMinutes")} />
      <div>
        <Input mb={20} placeholder="観光地検索" onChange={handleChange} />
        <Text mb={20}>選択：{selectedSpot.title}</Text>
        <Grid mb={20}>
          {spotList.map((val, i) => {
            return (
              <Grid.Col key={i} md={6} lg={3}>
                <Card shadow="sm" padding="sm" radius="md" withBorder onClick={() => selectSpot(val)}>
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Text weight={500}>{val.title}</Text>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </div>
      <Flex direction={"row"} justify={"center"}>
        <Button variant="filled" type="submit" leftIcon={<IconPlus />}>
          追加
        </Button>
      </Flex>
    </form>
  );
};
