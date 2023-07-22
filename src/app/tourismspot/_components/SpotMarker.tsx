import React from "react";
import { Marker } from "@react-google-maps/api";
import { useRecoilState, useRecoilValue } from "recoil";
import { SpotList, SpotInfoWindowState } from "@/atoms/SpotAtoms";
import { SpotInfoWindow } from "./SpotInfoWindow";
import { OfficialSpot } from "@/@types";

export const SpotMarker = (props: any) => {
  const [spotInfoWindow, setSpotInfoWindow] = useRecoilState(SpotInfoWindowState);
  const spotList = useRecoilValue(SpotList);

  const infoOption = {
    pixelOffset: props.offsetSize,
  };

  const clickMarker = (spot: OfficialSpot) => {
    setSpotInfoWindow(<SpotInfoWindow spot={spot} infoOption={infoOption} />);
  };

  return <>{spotInfoWindow}</>;
};
