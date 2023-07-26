import { OfficialSpot } from "@/@types";
import { OfficialSpotBookmark } from "@/@types";

export const formatTourismForSelector = (
  tourismspotlist: OfficialSpot[],
  tourismspotBookmarkList: OfficialSpotBookmark[]
) => {
  const bookmarkFormattedData = tourismspotBookmarkList.map((spot) => {
    const image = spot.officialSpotDetail.officialSpotImages[0]?.src || "/dummyImage.svg";
    const group = "お気に入りした観光地";
    return { image: image, label: spot.officialSpotDetail.title, group: group, id: spot.officialSpotDetail.id };
  });
  const formattedData = tourismspotlist
    .map((spot) => {
      const image = spot.officialSpotImages[0]?.src || "/dummyImage.svg";
      const isBookmarked = tourismspotBookmarkList.some((bookmark) => bookmark.officialSpotDetail.id === spot.id);
      const group = "すべての観光地";
      if (isBookmarked) return;
      return {
        image: image,
        label: spot.title,
        group: group,
        id: spot.id,
      };
    })
    .filter((spot) => spot != null);

  return bookmarkFormattedData.concat(
    formattedData as unknown as {
      image: string;
      label: string;
      group: string;
      id: string;
    }
  );
};
