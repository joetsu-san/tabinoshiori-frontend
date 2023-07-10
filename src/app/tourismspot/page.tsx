"use client";

import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import { SpotMarker } from "./_components/SpotMarker";
import { SpotButton } from "./_components/SpotButton";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { MapCenterState, MapHeight, SpotInfoWindowState, SpotList } from "@/atoms/SpotAtoms";

import { useOfficialSpotList } from "@/hooks/useOfficialSpotList";
import { Box, LoadingOverlay } from "@mantine/core";

const key = process.env.NEXT_PUBLIC_GOOGLEMAP_KEY as string;

// マップ中心座標
const center = {
  lat: 37.147887,
  lng: 138.2337322,
};

const TourismSpot = () => {
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const [mapCenter, setMapCenter] = useRecoilState(MapCenterState);
  const setSpotInfoWindow = useSetRecoilState(SpotInfoWindowState);
  const mapHeight = useRecoilValue(MapHeight);

  const { data, error } = useOfficialSpotList();

  // マップサイズ
  const containerStyle = {
    height: "100%",
    width: "100%",
  };

  useEffect(() => {
    return () => {
      setMapCenter(center);
      setSpotInfoWindow(undefined);
    };
  }, [setMapCenter, setSpotInfoWindow]);

  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };

  if (!data)
    return (
      <Box h={"calc(100vh - 12rem)"} maw={400} pos="relative">
        <LoadingOverlay visible={true} zIndex={1}></LoadingOverlay>
      </Box>
    );

  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: "0",
          width: "100%",
          height: `${mapHeight}vh`,
          zIndex: "100",
          transitionProperty: "height",
          transitionDuration: "0.3s",
        }}
      >
        <LoadScript googleMapsApiKey={key} onLoad={() => createOffsetSize()}>
          <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={13} clickableIcons={false}>
            <SpotMarker offsetSize={size} />
          </GoogleMap>
        </LoadScript>
      </div>

      <SpotButton offsetSize={size} />
    </div>
  );
};
export default TourismSpot;
