import { Box, Group, NavLink, Select } from "@mantine/core";
import { OpenConfirmModal } from "@mantine/modals/lib/context";
import { IconChevronRight, IconGenderFemale, IconGenderMale, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { usePutUser } from "./hooks";
import { useUserData } from "@/hooks/useUserData";

const genderText = [
  {
    id: 1,
    title: "男性",
  },
  {
    id: 2,
    title: "女性",
  },
  {
    id: 3,
    title: "その他",
  },
];

type Props = {
  genderId?: number;
  rootOpen: () => void;
  rootClose: () => void;
  openConfirmModal: (payload_0: OpenConfirmModal) => void;
};
export const Gender = ({ genderId, openConfirmModal, rootClose, rootOpen }: Props) => {
  const [gender, setGender] = useState<number>(genderId ?? 0);

  const handleChange = (e: string | null) => {
    setGender(Number(e ?? 0));
  };

  const { putUser } = usePutUser();
  const { data } = useUserData();
  const handleSubmit = async () => {
    console.debug(data?.birthday);
    try {
      data && (await putUser(data.username, data.birthday ? new Date(data.birthday) : undefined, gender));
    } catch (error) {
      console.error(error);
    }
  };

  const open = () => {
    rootClose();
    openConfirmModal({
      title: "性別を変更",
      labels: { confirm: "変更", cancel: "キャンセル" },
      centered: true,
      children: (
        <Box p={"20px"} h="10rem">
          <Group position="apart">
            <Select
              placeholder="性別を選択してください"
              onChange={handleChange}
              data={genderText.map(({ id, title }) => {
                return {
                  value: id.toString(),
                  label: title,
                };
              })}
            />
          </Group>
        </Box>
      ),
      closeButtonProps: {
        variant: "light",
        color: "gray",
      },
      confirmProps: {
        color: "cyan",
      },
      onConfirm: handleSubmit,
      onClose: () => {
        rootOpen();
      },
    });
  };

  return (
    <Box>
      <NavLink
        h="3rem"
        label="性別"
        description={genderId ? genderText[genderId].title : "未設定"}
        onClick={open}
        icon={
          <>
            <IconGenderMale height={"1.5rem"} width={"0.75rem"} />
            <IconGenderFemale height={"1.5rem"} width={"0.75rem"} />
          </>
        }
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
      />
    </Box>
  );
};
