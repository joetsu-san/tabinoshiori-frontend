import { client } from "@/lib/aspida";

export const deleteTourismspotBookmark = async (id: string, token: string) => {
  const bookmarkList = await client.user.official_spot_bookmark.$delete({
    body: {
      tourismSpotId: id,
    },
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  return bookmarkList;
};
