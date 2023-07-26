import { useDebounce } from "@/app/tourismspot/_hooks/useDebounce";
import { Button, Image, Text, TextInput, NumberInput, Card, Input, Grid, Flex } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { IconPlus } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { OfficialSpot } from "../../../../../../api/@types";
import { useOfficialSpotList } from "@/app/management/_hooks/useOfficialSpotList";

type ModalProps = {
  modelCourseList: any[];
  setModelCourseList: Dispatch<SetStateAction<any[]>>;
  viewList: any[];
  setViewList: Dispatch<SetStateAction<any[]>>;
  closeAction: () => void;
};

export const AddSpotModal: React.FC<ModalProps> = ({
  modelCourseList,
  setModelCourseList,
  viewList,
  setViewList,
  closeAction,
}) => {
  const { data, error } = useOfficialSpotList();

  const [spotList, setSpotList] = useState<OfficialSpot[]>([]);

  const [selectedSpot, setSelectedSpot] = useState<any>({});

  // バリデーションスキーマ
  const schema = z.object({
    comment: z.string().min(1, { message: "コメントが入力されていません" }),
  });

  const text = useForm({
    initialValues: {
      comment: "",
      stayMinutes: 1,
    },
    validate: zodResolver(schema),
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

  // 観光スポット選択
  const selectSpot = (data: any) => {
    const spotData = {
      officialSpotId: data.id,
      title: data.title,
      id: data.id,
    };
    setSelectedSpot(spotData);
  };

  // 観光スポット追加
  const setSpot = (formValues: any) => {
    const viewObj = {
      title: selectedSpot.title,
      comment: formValues.comment,
      stayMinutes: formValues.stayMinutes,
    };

    const tempObj = {
      officialSpotId: selectedSpot.id,
      comment: formValues.comment,
      sortIndex: modelCourseList.length,
      stayMinute: formValues.stayMinutes,
      minuteSincePrevious: 1,
    };

    setViewList([...viewList, viewObj]);
    setModelCourseList([...modelCourseList, tempObj]);
    closeAction();
  };

  return (
    <form onSubmit={text.onSubmit((value) => setSpot(value))}>
      <TextInput label="備考" {...text.getInputProps("comment")} />
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
                      src={val.officialSpotImages[0] != undefined ? val.officialSpotImages[0].src : "/dummyImage.svg"}
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
