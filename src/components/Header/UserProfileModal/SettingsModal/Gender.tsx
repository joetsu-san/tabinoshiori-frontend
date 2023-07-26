import { Box, Group, NavLink, Select } from "@mantine/core";
import { OpenConfirmModal } from "@mantine/modals/lib/context";
import { IconChevronRight, IconGenderFemale, IconGenderMale, IconX } from "@tabler/icons-react";
import { useCallback, useState } from "react";
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

  const { putUser } = usePutUser();
  const { data } = useUserData();

  const handleChange = (e: string | null) => {
    console.log(e);
    setGender(Number(e ?? 0));
  };

  const handleSubmit = async () => {
    console.log(gender);
    try {
      data && (await putUser(data.username, data.birthday ? new Date(data.birthday) : undefined, gender));
    } catch (error) {
      console.error(error);
    }
  };

  const open = useCallback(() => {
    openConfirmModal({
      title: "性別を変更",
      labels: { confirm: "変更", cancel: "キャンセル" },
      centered: true,
      children: (
        <Box p={"20px"} h="10rem">
          <Group position="apart">
            <Select
              label="性別"
              value={gender.toString()}
              placeholder="性別を選択してください"
              onChange={(e) => handleChange(e)}
              data={genderText.map((val) => {
                return { value: val.id.toString(), label: val.title };
              })}
              defaultValue={genderId?.toString() ?? null}
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
        // debugger;
        rootOpen();
      },
    });
  }, [genderId]);

  return (
    <Box>
      <NavLink
        h="3rem"
        label="性別"
        description={genderId ? genderText[genderId - 1].title : "未設定"}
        onClick={() => {
          open();
          rootClose();
        }}
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
