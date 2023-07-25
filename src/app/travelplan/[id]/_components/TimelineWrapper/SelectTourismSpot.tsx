import React, { ComponentPropsWithoutRef, useMemo, useState } from "react";
import { forwardRef } from "react";
import { Group, Avatar, Text, Select, Image, Skeleton } from "@mantine/core";
import { formatTourismForSelector } from "../../utils/formatTourismForSelector";
import { useOfficialSpotList } from "@/hooks/useOfficialSpotList";
import { useTourismspotBookmarkList } from "@/hooks/useTourismspotBookmarkList";

export type SelectDataItem = {
  value: string;
  label: string;
  group: string;
  image: string;
};

export type SelectTourismSpotProps = {
  onChange: (tourismSpotId: string | undefined) => void;
};

type SelectItemComponentProps = ComponentPropsWithoutRef<"div"> & SelectDataItem;

const SelectItemComponent = forwardRef<HTMLDivElement, SelectItemComponentProps>((props, ref) => {
  const { value, label, image, group, ...others } = props;
  return (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  );
});
SelectItemComponent.displayName = "SelectItemComponent";

type TourismSpot = {
  id: string;
  label: string;
  group: string;
  image: string;
};

export const SelectTourismSpot = (props: SelectTourismSpotProps) => {
  const { onChange } = props;
  const [selectedSpot, setSelectedSpot] = useState<TourismSpot | undefined>();

  const { data: officialSpotList } = useOfficialSpotList();
  const { data: tourismspotBookmarkList } = useTourismspotBookmarkList();

  const formatData: TourismSpot[] | undefined =
    officialSpotList && tourismspotBookmarkList
      ? formatTourismForSelector(officialSpotList, tourismspotBookmarkList)
      : undefined;

  const selectData: SelectDataItem[] | undefined = useMemo(
    () => formatData?.map(({ id, image, label, group }): SelectDataItem => ({ value: id, label, image, group })),
    [formatData]
  );

  const handleChange = (value: string | null) => {
    const spot = formatData?.find((item) => item.id === value);
    setSelectedSpot(spot);
    onChange(spot?.id);
  };

  return (
    <>
      {selectedSpot ? (
        <Image src={selectedSpot.image} alt="観光地画像" width={200} height={150} fit="cover" />
      ) : (
        <Skeleton animate={false} width={200} height={150} />
      )}

      {selectData && (
        <Select
          label="観光地を選択"
          placeholder="選択してください"
          itemComponent={SelectItemComponent}
          searchable
          data={selectData}
          maxDropdownHeight={160}
          nothingFound="見つかりませんでした"
          filter={(value: string, item: SelectDataItem) => new RegExp(value.trim(), "i").test(item.label)}
          style={{ width: " 95%" }}
          onChange={handleChange}
        />
      )}
    </>
  );
};
