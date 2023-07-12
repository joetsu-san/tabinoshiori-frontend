import { firebaseTokenState } from "@/atoms";
import { client } from "@/lib/aspida";
import { useCallback } from "react";
import { useRecoilValue } from "recoil";

export const usePutUser = () => {
  const token = useRecoilValue(firebaseTokenState);
  const putUser = useCallback(
    async (username: string, birthday?: Date, genderId: number = 0) => {
      try {
        return await client.user.$put({
          body: {
            name: username,
            birthday: birthday && birthday.toISOString(),
            genderId: genderId,
          },
          config: {
            headers: { Authorization: `Bearer ${token}` },
          },
        });
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [token]
  );
  return { putUser };
};
