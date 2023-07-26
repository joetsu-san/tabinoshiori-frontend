import { Select } from "@mantine/core";
import { TourismSpotSelectItem } from "./TourismSpotSelectItem";
import { useOfficialSpotList } from "@/hooks/useOfficialSpotList";
import { LoadingDisplay } from "@/components/LoadingDisplay";

type Props = {
  onChange: (tourismSpotId: string, imageSrc: string) => void;
  value: string;
};
export const TourismSpotSelect = ({ onChange, value }: Props) => {
  const handleChange = (id: string, imageSrc: string) => {
    onChange(id, imageSrc);
  };
  const { data } = useOfficialSpotList();

  if (!data) return <LoadingDisplay />;
  return (
    <Select
      label="観光地を選択"
      placeholder="選択してください"
      defaultValue={value}
      data={data.map(({ id, title, officialSpotImages }) => {
        return {
          id: id,
          imageSrc: officialSpotImages[0]?.src || "/dummyImage.svg",
          title: title,
          value: id,
          onClick: (id: string, imageSrc: string) => {
            handleChange(id, imageSrc);
          },
          label: title,
        };
      })}
      itemComponent={TourismSpotSelectItem}
      searchable
      maxDropdownHeight={160}
      nothingFound="見つかりませんでした"
      w="95%"
    />
  );
};
