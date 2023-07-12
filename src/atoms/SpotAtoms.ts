import { atom } from "recoil";
import { OfficialSpot } from "@/@types";

// 観光地一覧
export const SpotList = atom<OfficialSpot[]>({
  key: "SpotList",
  default: undefined,
});

// infoWindow 表示用
export const SpotInfoWindowState = atom({
  key: "SpotInfoState",
  default: <any>undefined,
});

// マップ中心座標
export const MapCenterState = atom({
  key: "MapCenterState",
  default: <MapCenter>{
    lat: 37.147976,
    lng: 138.236285,
  },
});

export const MapHeight = atom({
  key: "MapHeight",
  default: 40,
});

// スポット情報
type OfficialSpotOverview = {
  id: string;
  title: string;
  ruby: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  officialSpotStatus: "open" | "close";
};

// 中心座標
type MapCenter = {
  lat: number;
  lng: number;
};
