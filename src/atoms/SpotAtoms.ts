import { atom } from "recoil";

const positionData: OfficialSpotOverview[] = [
  {
    id: "aaaa",
    title: "秋葉原",
    ruby: "あきはばら",
    description: "",
    address: "",
    latitude: 35.69731,
    longitude: 139.7747,
    officialSpotStatus: "open",
  },
  {
    id: "bbbb",
    title: "岩本町",
    ruby: "いわもとちょう",
    description: "",
    address: "",
    latitude: 35.69397,
    longitude: 139.7762,
    officialSpotStatus: "open",
  },
  {
    id: "cccc",
    title: "上越市",
    ruby: "じょうえつし",
    description: "",
    address: "",
    latitude: 37.147887,
    longitude: 138.2337322,
    officialSpotStatus: "open",
  },
];

// 選択したスポットリスト
// export const SelectedSpotList = atom({
//   key: 'SelectedSpotList',
//   default: <PositionItem[]>[]
// })

export const SelectedSpotList = atom({
  key: "SelectedSpotList",
  default: <OfficialSpotOverview[]>positionData,
});

// infoWindow　表示用
export const SpotInfoWindowState = atom({
  key: "SpotInfoState",
  default: <any>undefined,
});

export const MapCenterState = atom({
  key: "MapCenterState",
  default: <MapCenter>{ lat: 35.69731, lng: 139.7747 },
});

// スポット情報
type PositionItem = {
  id: string;
  label: string;
  lat: number;
  lng: number;
};

// 中心座標
type MapCenter = {
  lat: number;
  lng: number;
};

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
