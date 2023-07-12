import { Box, Button, Group, NavLink } from "@mantine/core";
import { OpenConfirmModal } from "@mantine/modals/lib/context";
import { IconCake, IconCheck, IconChevronRight } from "@tabler/icons-react";
import { BirthdayInput } from "../../BirthdayInput";
import { useState } from "react";
import { usePutUser } from "./hooks";
import { useRecoilValue } from "recoil";
import { firebaseUserState } from "@/atoms";
import { useUserData } from "@/hooks/useUserData";

type Props = {
  birthday?: string;
  rootOpen: () => void;
  rootClose: () => void;
  openConfirmModal: (payload_0: OpenConfirmModal) => void;
};
export const Birthday = ({ birthday: defaultBirthday, rootOpen, rootClose, openConfirmModal }: Props) => {
  const [birthday, setBirthday] = useState(defaultBirthday);
  const b = birthday?.split("T")[0].split("-");
  const defaultYear = b ? b[0] : 0;
  const defaultMonth = b ? b[1] : 0;
  const defaultDay = b ? b[2] : 0;

  const { putUser } = usePutUser();
  const { data } = useUserData();
  const handleSubmit = async () => {
    try {
      data && (await putUser(data.username, birthday ? new Date(birthday) : undefined, data.genderId));
    } catch (error) {
      console.error(error);
    }
  };

  const open = () => {
    rootClose();
    openConfirmModal({
      title: "生年月日を変更",
      labels: { confirm: "変更", cancel: "キャンセル" },
      centered: true,
      children: (
        <Box p={"20px"}>
          <BirthdayInput
            defaultYear={String(defaultYear)}
            defaultMonth={String(defaultMonth)}
            defaultDay={String(defaultDay)}
            setBirthday={setBirthday}
          />
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
    <NavLink
      h="3rem"
      label="生年月日"
      description={birthday ?? "未設定"}
      onClick={open}
      icon={<IconCake size="1.5rem" stroke={1.5} />}
      rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
    />
  );
};
