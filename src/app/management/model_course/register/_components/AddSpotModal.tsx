import { useDebounce } from "@/app/_hooks/useDebounce";
import { Button, Image, Text, TextInput, NumberInput, Card, Input, Grid, Flex } from "@mantine/core";
import { useForm } from "@mantine/form";
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

  // 選択した観光地
  const [selectedSpot, setSelectedSpot] = useState<any>(undefined);
  const [selectIsError, setSelectIsError] = useState<boolean>(true);

  const text = useForm({
    initialValues: {
      comment: "",
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
    if (data) {
      if (debouncedInputText != "") {
        const temp = data.filter((spot) => spot.title.match(debouncedInputText));
        setSpotList(temp);
      } else {
        setSpotList(data);
      }
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
    setSelectIsError(false);
    const spotData = {
      officialSpotId: data.id,
      title: data.title,
      id: data.id,
    };
    setSelectedSpot(spotData);
  };

  // 観光スポット追加
  const setSpot = (formValues: any) => {
    if (selectedSpot) {
      const viewObj = {
        // 見た目用オブジェクト
        title: selectedSpot.title,
        comment: formValues.comment,
        stayMinutes: formValues.stayMinutes,
      };

      const tempObj = {
        // データ登録用オブジェクト
        officialSpotId: selectedSpot.id,
        comment: formValues.comment,
        sortIndex: modelCourseList.length,
        stayMinute: formValues.stayMinutes,
        minuteSincePrevious: 1,
      };

      setViewList([...viewList, viewObj]);
      setModelCourseList([...modelCourseList, tempObj]);
      closeAction();
    }
  };

  return (
    <div
      style={{
        height: "calc(100vh - (5vh * 2) - 54px - 1rem)",
        width: "100%",
        overflowX: "scroll",
      }}
    >
      <form
        id="spotForm"
        onSubmit={text.onSubmit((value) => setSpot(value))}
        style={{
          position: "sticky",
          top: "0",
          zIndex: "10",
        }}
      >
        <div
          style={{
            paddingBottom: "1px",
            backgroundColor: "white",
          }}
        >
          <TextInput label="備考" {...text.getInputProps("comment")} />
          <NumberInput label="滞在時間" mb={20} {...text.getInputProps("stayMinutes")} />
          <Input mb={20} placeholder="観光地検索" onChange={handleChange} />
          <Text mb={20}>選択：{selectIsError ? "観光地を選択してください" : selectedSpot.title}</Text>
        </div>
      </form>
      <div
        style={{
          padding: "0 10px 3rem 10px",
          zIndex: "5",
        }}
      >
        <Grid>
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
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          padding: "1rem",
          backgroundColor: "white",
        }}
      >
        <Flex direction={"row"} justify={"center"}>
          <Button variant="filled" type="submit" form="spotForm" leftIcon={<IconPlus />} disabled={selectIsError}>
            追加
          </Button>
        </Flex>
      </div>
    </div>
  );
};
