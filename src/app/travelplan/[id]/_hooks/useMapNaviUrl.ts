import { useTravelPlan } from "@/hooks/useTravelPlan";

const generateMapNaviUrlOfFirst = (latitude: number, longitude: number) => {
  const origin = `&origin=${latitude},${longitude}`;
  return origin;
};

const generateMapNaviUrlOfLast = (latitude: number, longitude: number) => {
  const destination = `&destination=${latitude},${longitude}`;
  return destination;
};

export const useMapNaviUrl = (travelPlanId: string) => {
  const baseUrl = "https://www.google.com/maps/dir/?api=1";
  const travelPlan = useTravelPlan(travelPlanId);
  let mapNaviUrl = baseUrl;
  let waypoints = `&waypoints=`;

  if (!travelPlan) return { error: "旅程が見つかりませんでした。" };

  for (const [index, spot] of travelPlan.travelPlanSpots.entries()) {
    if (index === 0) {
      mapNaviUrl += generateMapNaviUrlOfFirst(spot.latitude, spot.longitude);
      continue;
    }
    if (index === travelPlan.travelPlanSpots.length - 1) {
      mapNaviUrl += generateMapNaviUrlOfLast(spot.latitude, spot.longitude);
      continue;
    }
    if (index !== 1) waypoints += "|";
    waypoints += `${spot.latitude},${spot.longitude}`;
  }
  mapNaviUrl += waypoints;

  return { mapNaviUrl };
};
