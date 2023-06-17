import React from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { useRecoilState, useRecoilValue } from "recoil";
import { SelectedSpotList, SpotInfoWindowState } from "@/atoms/SpotAtoms";

// スポット情報
type PositionItem = {
  id: string;
  label: string;
  lat: number;
  lng: number;
};

// infoWindowスタイル
const divStyle = {
  background: "white",
  fontSize: 16,
};

export const SpotMarker = (props: any) => {
  const [spotInfoWindow, setSpotInfoWindow] = useRecoilState(SpotInfoWindowState);
  const spotList = useRecoilValue(SelectedSpotList);

  const infoOption = {
    pixelOffset: props.offsetSize,
  };

  const clickMarker = (spot: PositionItem) => {
    const LatLng = {
      lat: spot.lat,
      lng: spot.lng,
    };

    setSpotInfoWindow(
      <InfoWindow position={LatLng} onCloseClick={() => setSpotInfoWindow(undefined)} options={infoOption}>
        <div style={divStyle}>
          <h1>{spot.label}</h1>
        </div>
      </InfoWindow>
    );
  };

  return (
    <>
      {spotList.map((val: PositionItem, i: number) => {
        const LatLng = {
          lat: val.lat,
          lng: val.lng,
        };
        return <Marker key={i} position={LatLng} onClick={() => clickMarker(val)} />;
      })}

      {spotInfoWindow}
    </>
  );
};
