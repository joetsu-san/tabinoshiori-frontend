import { Textarea } from "@mantine/core";
import { useCallback, useState } from "react";

type Props = {
  value: string;
  onChange: (comment: string) => void;
};
export const CommentInput = ({ value, onChange }: Props) => {
  const [comment, setComment] = useState(value);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const c = e.target.value;
      setComment(c.trim());
      onChange(c.trim());
    },
    [onChange]
  );

  return (
    <Textarea
      value={comment}
      onChange={handleChange}
      placeholder="コメントを入力してください"
      label="コメント"
      size="md"
      style={{ width: " 95%" }}
      minRows={3}
    />
  );
};
