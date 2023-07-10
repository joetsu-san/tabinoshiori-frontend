import { OfficialSpot } from "@/@types";

export function formatTourismForSelector(tourismspotlist: OfficialSpot[]) {
  const formattedData = tourismspotlist.map((spot) => {
    const image = spot.officialSpotImages[0]?.src || "/dummyImage.svg";
    return {
      image: image,
      label: spot.title,
      value: spot.id,
    };
  });

  return formattedData;
}