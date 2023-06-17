import { atom } from "recoil";

const positionData = [
  {
    id: "aaaa",
    label: "秋葉原",
    lat: 35.69731,
    lng: 139.7747,
  },
  {
    id: "bbbb",
    label: "岩本町",
    lat: 35.69397,
    lng: 139.7762,
  },
  {
    id: "cccc",
    label: "上越市",
    lat: 37.147887,
    lng: 138.2337322,
  },
];

// 選択したスポットリスト
// export const SelectedSpotList = atom({
//   key: 'SelectedSpotList',
//   default: <PositionItem[]>[]
// })

export const SelectedSpotList = atom({
  key: "SelectedSpotList",
  default: <PositionItem[]>positionData,
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
