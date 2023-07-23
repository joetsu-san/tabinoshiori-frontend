import { useCallback, useEffect, useState } from "react";
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
  const travelPlan = useTravelPlan(travelPlanId);
  const [mapNaviUrl, setMapNaviUrl] = useState<string>("");
  const baseUrl = "https://www.google.com/maps/dir/?api=1";

  const generateMapNaviUrls = useCallback(() => {
    let url = baseUrl;
    let waypoints = `&waypoints=`;
    if (!travelPlan) return;

    for (const [index, spot] of travelPlan.travelPlanSpots.entries()) {
      if (index === 0) {
        url += generateMapNaviUrlOfFirst(spot.latitude, spot.longitude);
        continue;
      }
      if (index === travelPlan.travelPlanSpots.length - 1) {
        url += generateMapNaviUrlOfLast(spot.latitude, spot.longitude);
        continue;
      }
      if (index !== 1) waypoints += "|";
      waypoints += `${spot.latitude},${spot.longitude}`;
    }
    url += waypoints;

    setMapNaviUrl(url);
  }, [travelPlan]);

  useEffect(() => {
    generateMapNaviUrls();
  }, [travelPlan]);

  return { mapNaviUrl };
};
