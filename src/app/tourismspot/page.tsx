"use client";

import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Button } from "@mantine/core";

import { SpotMarker } from "./_components/SpotMarker";
import { SpotButton } from "./_components/SpotButton";

import { useRecoilState, useRecoilValue } from "recoil";
import { MapCenterState } from "@/atoms/SpotAtoms";

const key = process.env.NEXT_PUBLIC_GOOGLEMAP_KEY as string;

// マップサイズ
const containerStyle = {
  height: "50vh",
  width: "100%",
};

// マップ中心座標
const center = {
  lat: 35.69731,
  lng: 139.7747,
};

const TourismSpot = () => {
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const mapCenter = useRecoilValue(MapCenterState);

  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };

  return (
    <>
      <div style={{ width: "100%", height: "50vh" }}>
        <LoadScript googleMapsApiKey={key} onLoad={() => createOffsetSize()}>
          <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={17} clickableIcons={false}>
            <SpotMarker offsetSize={size} />
          </GoogleMap>
        </LoadScript>
      </div>

      <SpotButton />
    </>
  );
};
export default TourismSpot;
