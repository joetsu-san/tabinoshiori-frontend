import { client } from "@/lib/aspida";

export const createUser = async (token: string, name: string) => {
  const user = await client.user.login.$post({
    body: {
      username: name,
    },
    config: { headers: { Authorization: `Bearer ${token}` } },
  });

  return user;
};
