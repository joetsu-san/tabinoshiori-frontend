"use client";

import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Group, Button, Input } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

import { SpotMarker } from "./_components/SpotMarker";
import { SpotButton } from "./_components/SpotButton";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { SelectedSpotList, MapCenterState } from "@/atoms/SpotAtoms";

import axios from "axios";
import aspida from "@aspida/axios";
import api from "../../../api/official_spot/$api";

const key = process.env.NEXT_PUBLIC_GOOGLEMAP_KEY as string;

// マップサイズ
const containerStyle = {
  height: "40vh",
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
  const setSpotList = useSetRecoilState(SelectedSpotList);

  // useEffect(() => {
  //   const axiosConfig = {
  //     baseURL: "http://localhost:4000/api"
  //   }
  //   const client = api(aspida(axios, axiosConfig));
  //   (async () => {
  //     const res = await client.$get()
  //     setSpotList(res)
  //   })();
  // }, [setSpotList])

  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };

  return (
    <>
      <div style={{ position: "sticky", top: "0", width: "100%", zIndex: "999" }}>
        <LoadScript googleMapsApiKey={key} onLoad={() => createOffsetSize()}>
          <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={17} clickableIcons={false}>
            <SpotMarker offsetSize={size} />
          </GoogleMap>
        </LoadScript>
      </div>

      <SpotButton offsetSize={size} />
    </>
  );
};
export default TourismSpot;
