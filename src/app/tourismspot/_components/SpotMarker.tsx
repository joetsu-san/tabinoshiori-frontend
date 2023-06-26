import React from "react";
import { Marker } from "@react-google-maps/api";
import { useRecoilState, useRecoilValue } from "recoil";
import { SpotList, SpotInfoWindowState } from "@/atoms/SpotAtoms";
import { SpotInfoWindow } from "./SpotInfoWindow";

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

export const SpotMarker = (props: any) => {
  const [spotInfoWindow, setSpotInfoWindow] = useRecoilState(SpotInfoWindowState);
  const spotList = useRecoilValue(SpotList);

  const infoOption = {
    pixelOffset: props.offsetSize,
  };

  const clickMarker = (spot: OfficialSpotOverview) => {
    setSpotInfoWindow(<SpotInfoWindow spot={spot} infoOption={infoOption} />);
  };

  return (
    <>
      {spotList.map((val: OfficialSpotOverview, i: number) => {
        const LatLng = {
          lat: val.latitude,
          lng: val.longitude,
        };
        return <Marker key={i} position={LatLng} onClick={() => clickMarker(val)} />;
      })}

      {spotInfoWindow}
    </>
  );
};
