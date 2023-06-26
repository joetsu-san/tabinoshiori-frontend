import React from "react";
import { useSetRecoilState } from "recoil";
import { SpotInfoWindowState } from "@/atoms/SpotAtoms";

import { InfoWindow } from "@react-google-maps/api";

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

// infoWindowスタイル
const divStyle = {
  background: "white",
  // fontSize: 16,
};

type Props = {
  spot: OfficialSpotOverview;
  infoOption: any;
};

/**
 * InfoWindowコンポーネント
 * @returns InfoWindow
 */
export const SpotInfoWindow: React.FC<Props> = ({ spot, infoOption }) => {
  const setSpotInfoWindow = useSetRecoilState(SpotInfoWindowState);

  const LatLng = {
    lat: spot.latitude,
    lng: spot.longitude,
  };

  return (
    <InfoWindow position={LatLng} onCloseClick={() => setSpotInfoWindow(undefined)} options={infoOption}>
      <div style={divStyle}>
        <h3>{spot.title}</h3>
        <p>観光地の説明</p>
        <p>概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要</p>
      </div>
    </InfoWindow>
  );
};
