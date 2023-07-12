import { OfficialSpot } from "@/@types";
import { OfficialSpotBookmark } from "@/@types";
import { officialSpotBookmarkList } from "@/mock/mockdata";

export function formatTourismForSelector(
  tourismspotlist: OfficialSpot[],
  tourismspotBookmarkList: OfficialSpotBookmark[]
) {
  //観光地のお気に入り登録のAPI連携ができたら消す
  if (tourismspotBookmarkList.length === 0) {
    tourismspotBookmarkList = officialSpotBookmarkList;
  }

  const formattedData = tourismspotlist.map((spot) => {
    const image = spot.officialSpotImages[0]?.src || "/dummyImage.svg";
    const isBookmarked = tourismspotBookmarkList.some((bookmark) => bookmark.officialSpotDetail.id === spot.id);
    const group = isBookmarked ? "お気に入りした観光地" : "すべての観光地";
    return {
      image: image,
      label: spot.title,
      value: spot.id,
      group: group,
    };
  });

  return formattedData;
}
