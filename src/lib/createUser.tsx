import { client } from "@/lib/aspida";

export const createUser = async (token: string, name: string) => {
  const user = await client.user.login.$post({
    config: { headers: { Authorization: `Bearer ${token}` } },
    body: {
      name: name,
      birthday: "0000-00-00",
      genderId: 1,
    },
  });

  return user;
};
