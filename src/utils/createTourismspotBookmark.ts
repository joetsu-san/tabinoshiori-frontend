import { client } from "@/lib/aspida";

export const createTourismspotBookmark = async (id: string, token: string) => {
  const bookmarkList = await client.user.official_spot_bookmark.$post({
    body: {
      tourismSpotId: id,
      sortIndex: 0,
    },
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  return bookmarkList;
};
