import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { get } from "http";
import { WebsocketProvider } from "y-websocket";
import { TravelPlanSpot } from "../../api/@types";

export const store = syncedStore({ arrayData: [] as TravelPlanSpot[] });
const doc = getYjsDoc(store);

const wsProvider = new WebsocketProvider("ws://localhost:1234", "travel-plan", doc);
