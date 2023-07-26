import { ModelCourseDetail } from "@/@types";

const generateMapNaviUrlOfFirst = (latitude: number, longitude: number) => {
  const origin = `&origin=${latitude},${longitude}`;
  return origin;
};

const generateMapNaviUrlOfLast = (latitude: number, longitude: number) => {
  const destination = `&destination=${latitude},${longitude}`;
  return destination;
};

export const useMapNaviUrl = (modelcoursedetail: ModelCourseDetail) => {
  const baseUrl = "https://www.google.com/maps/dir/?api=1";
  let mapNaviUrl = baseUrl;
  let waypoints = `&waypoints=`;

  if (!modelcoursedetail) return { error: "モデルコースが見つかりませんでした。" };

  for (const [index, spot] of modelcoursedetail.modelCourseSpots.entries()) {
    if (index === 0) {
      mapNaviUrl += generateMapNaviUrlOfFirst(spot.latitude, spot.longitude);
      continue;
    }
    if (index === modelcoursedetail.modelCourseSpots.length - 1) {
      mapNaviUrl += generateMapNaviUrlOfLast(spot.latitude, spot.longitude);
      continue;
    }
    if (index !== 1) waypoints += "|";
    waypoints += `${spot.latitude},${spot.longitude}`;
  }
  mapNaviUrl += waypoints;

  return { mapNaviUrl };
};
