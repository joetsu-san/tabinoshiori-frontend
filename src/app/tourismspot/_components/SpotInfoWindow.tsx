import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MapCenterState, SelectedSpotList, SpotInfoWindowState } from "@/atoms/SpotAtoms";

import { Marker, InfoWindow } from "@react-google-maps/api";

import { Card, Image, Text, Badge, Button, Group, Flex, Input } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

type PositionItem = {
  id: string;
  label: string;
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

// infoWindowスタイル
const divStyle = {
  background: "white",
  fontSize: 16,
};

type Props = {
  spot: OfficialSpotOverview;
  infoOption: any;
};

export const SpotInfoWindow: React.FC<Props> = ({ spot, infoOption }) => {
  const setSpotInfoWindow = useSetRecoilState(SpotInfoWindowState);

  const LatLng = {
    lat: spot.latitude,
    lng: spot.longitude,
  };

  return (
    <InfoWindow position={LatLng} onCloseClick={() => setSpotInfoWindow(undefined)} options={infoOption}>
      <div style={divStyle}>
        <h2>{spot.title}</h2>
        <p>観光地の説明</p>
        <p>概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要</p>
      </div>
    </InfoWindow>
  );
};
