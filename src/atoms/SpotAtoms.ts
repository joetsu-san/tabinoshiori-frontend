import axios from "axios";
import { atom, selector } from "recoil";
import aspida from "@aspida/axios";
import api from "../../api/official_spot/$api";

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
    latitude: 37.147976,
    longitude: 138.236285,
    officialSpotStatus: "open",
  },
];

// 観光地一覧
export const SpotList = atom({
  key: "SpotList",
  default: <OfficialSpotOverview[]>positionData,
});

// export const SpotList = atom({
//   key: "SpotList",
//   default: selector({
//     key: 'savedTodoListState',
//     get: async ({get}) => {
//       try {
//         const axiosConfig = {
//           baseURL: "http://localhost:4000"
//         }
//         const client = api(aspida(axios, axiosConfig));
//         const res = await client.$get()
//         return res;
//       } catch (error) {
//         throw error;
//       }
//     },
//   }),
// });

// infoWindow　表示用
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
