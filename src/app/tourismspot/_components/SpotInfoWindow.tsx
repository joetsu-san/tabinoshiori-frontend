import React from "react";
import { useSetRecoilState } from "recoil";
import { SpotInfoWindowState } from "@/atoms/SpotAtoms";

import { InfoWindow } from "@react-google-maps/api";
import { OfficialSpot } from "@/@types";

// infoWindowスタイル
const divStyle = {
  background: "white",
  // fontSize: 16,
};

type Props = {
  spot: OfficialSpot;
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
        <p>{spot.address}</p>
        <p>{spot.description}</p>
      </div>
    </InfoWindow>
  );
};
