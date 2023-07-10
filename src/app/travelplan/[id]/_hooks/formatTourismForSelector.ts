import { OfficialSpot } from "../../../../../api/@types";

export function formatTourismForSelector(tourismspotlist: OfficialSpot[]) {
  const formattedData = tourismspotlist.map((spot) => {
    const image = spot.officialSpotImages[0]?.src || "/logo.svg";
    return {
      image: image,
      label: spot.title,
      value: spot.id,
    };
  });

  return formattedData;
}
