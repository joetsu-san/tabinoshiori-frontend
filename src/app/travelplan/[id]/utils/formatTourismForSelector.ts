import { OfficialSpot } from "@/@types";
import { OfficialSpotBookmark } from "@/@types";

export const formatTourismForSelector = (
  tourismspotlist: OfficialSpot[],
  tourismspotBookmarkList: OfficialSpotBookmark[]
) => {
  const formattedData = tourismspotlist.map((spot) => {
    const image = spot.officialSpotImages[0]?.src || "/dummyImage.svg";
    const isBookmarked = tourismspotBookmarkList.some((bookmark) => bookmark.officialSpotDetail.id === spot.id);
    const group = isBookmarked ? "お気に入りした観光地" : "すべての観光地";
    return {
      image: image,
      label: spot.title,
      group: group,
      id: spot.id,
    };
  });

  return formattedData;
};
