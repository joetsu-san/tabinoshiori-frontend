import { useDebounce } from "@/app/tourismspot/_hooks/useDebounce";
import { SpotList } from "@/atoms/SpotAtoms";
import { Button, Image, Text, TextInput, NumberInput, Card, Input, Grid } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconPlus } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

type ModalProps = {
  modelCourseList: any[];
  dispatch: Dispatch<SetStateAction<any[]>>;
  closeAction: () => void;
};

export const AddSpotModal: React.FC<ModalProps> = ({ modelCourseList, dispatch, closeAction }) => {
  const spotList = useRecoilValue(SpotList); // 観光地データマスター
  const [tempSpotList, setTempSpotList] = useState(spotList); // 検索後観光地データ

  const [selectedSpot, setSelectedSpot] = useState<any>({});

  // 検索 Debounce
  const [inputText, setInputText] = useState("");
  const debouncedInputText = useDebounce(inputText, 500);
  const handleChange = (event: any) => setInputText(event.target.value);
  useEffect(() => {
    console.log(`「${debouncedInputText}」`);
    // 観光地検索処理
    if (debouncedInputText != "") {
      const temp = spotList.filter((spot) => spot.title.match(debouncedInputText));
      setTempSpotList(temp);
    } else {
      setTempSpotList(spotList);
    }
  }, [debouncedInputText, setTempSpotList, spotList]);

  const text = useForm({
    initialValues: {
      description: "",
      stayMinutes: 1,
    },
  });

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
      <NumberInput label="滞在時間" {...text.getInputProps("stayMinutes")} />
      <div>
        <Input placeholder="観光地検索" onChange={handleChange} />
        <p>選択：{selectedSpot.title}</p>
        <Grid>
          {tempSpotList.map((val, i) => {
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
      <Button variant="filled" type="submit" leftIcon={<IconPlus />}>
        追加
      </Button>
    </form>
  );
};
