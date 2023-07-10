import React, { useEffect } from "react";
import { forwardRef } from "react";
import { Group, Avatar, Text, Select, Image, Skeleton } from "@mantine/core";
import { formatTourismForSelector } from "../../utils/formatTourismForSelector";
import { useRecoilState } from "recoil";
import { travelPlanTourismSpotInputState } from "@/atoms";
import { useOfficialSpotList } from "@/hooks/useOfficialSpotList";

type ItemProps = {
  image: string;
  label: string;
  comment: string;
};

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(function SelectItemBase(
  { image, label, comment, ...others }: ItemProps,
  ref
) {
  return (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {comment}
          </Text>
        </div>
      </Group>
    </div>
  );
});

export const SelectTourismSpot = () => {
  const [travelPlanTourismSpotInput, setTravelPlanTourismSpotInput] = useRecoilState(travelPlanTourismSpotInputState);

  const { data, error } = useOfficialSpotList();
  useEffect(() => {
    console.log(data);
    console.log(error);
  }, [data, error]);

  const formatData = data && formatTourismForSelector(data);

  const handleOnChange = (selectedId: string) => {
    const selectedSpot = formatData?.find((item) => item.value === selectedId);
    if (selectedSpot) {
      setTravelPlanTourismSpotInput({
        ...travelPlanTourismSpotInput,
        image: selectedSpot.image,
        value: selectedSpot.value,
        label: selectedSpot.label,
      });
    } else {
      setTravelPlanTourismSpotInput({
        ...travelPlanTourismSpotInput,
        image: "",
        value: "",
        label: "",
      });
    }
  };

  return (
    <>
      {travelPlanTourismSpotInput.image ? (
        <Image src={travelPlanTourismSpotInput.image} alt="観光地画像" width={200} height={150} fit="cover" />
      ) : (
        <Skeleton animate={false} width={200} height={150} />
      )}

      {formatData && (
        <Select
          label="観光地を選択"
          placeholder="選択してください"
          itemComponent={SelectItem}
          data={formatData}
          searchable
          maxDropdownHeight={160}
          nothingFound="見つかりませんでした"
          filter={(value, item) =>
            (item.label && item.label.toLowerCase().includes(value.toLowerCase().trim())) ||
            item.comment.toLowerCase().includes(value.toLowerCase().trim())
          }
          style={{ width: " 95%" }}
          onChange={handleOnChange}
        />
      )}
    </>
  );
};
