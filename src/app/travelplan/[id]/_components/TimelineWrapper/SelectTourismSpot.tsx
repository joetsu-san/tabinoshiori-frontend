import React from "react";
import { forwardRef } from "react";
import { Group, Avatar, Text, Select, Image, Skeleton } from "@mantine/core";
import { formatTourismForSelector } from "../../utils/formatTourismForSelector";
import { useRecoilState } from "recoil";
import { travelPlanTourismSpotInputState } from "@/atoms";
import { useOfficialSpotList } from "@/hooks/useOfficialSpotList";
import { useTourismspotBookmarkList } from "@/hooks/useTourismspotBookmarkList";

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

  const { data: officialSpotList } = useOfficialSpotList();
  const { data: tourismspotBookmarkList } = useTourismspotBookmarkList();

  const formatData =
    officialSpotList && tourismspotBookmarkList
      ? formatTourismForSelector(officialSpotList, tourismspotBookmarkList)
      : undefined;

  const handleOnChange = (selectedId: string) => {
    const selectedSpot = formatData?.find((item) => item.id === selectedId);
    if (selectedSpot) {
      setTravelPlanTourismSpotInput({
        ...travelPlanTourismSpotInput,
        id: selectedSpot.id,
        image: selectedSpot.image,
        label: selectedSpot.label,
      });
    } else {
      setTravelPlanTourismSpotInput({
        ...travelPlanTourismSpotInput,
        id: "",
        image: "",
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
          searchable
          data={formatData.map(({ image, label, id, group }) => {
            return {
              image: image,
              label: label,
              value: id,
              group: group,
            };
          })}
          maxDropdownHeight={160}
          nothingFound="見つかりませんでした"
          style={{ width: " 95%" }}
          onChange={handleOnChange}
        />
      )}
    </>
  );
};
