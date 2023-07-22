import { client } from "@/lib/aspida";
import { FetchConfig } from "@aspida/fetch";

export type TravelPlan = {
  title: string;
  description: string;
  visitedAt?: Date;
  travelPlanSpots: TravelPlanSpot[];
};

export type TravelPlanSpot = {
  travelPlanSpotId: string;
  tourismSpotId: string;
  title: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  comment: string;
  sortIndex: number;
  minuteSincePrevious: number;
  ruby?: string;
  officialSpotStatus?: OfficialSpotStatus;
  officialSpotImages?: UploadedImage[];
};

export type OfficialSpotStatus = {
  id: number;
  title: string;
};

export type UploadedImage = {
  id: string;
  src: string;
};

export type TravelPlanEditProfileEvent = {
  actionType: "EDIT_PROFILE";
  travelPlanId: string;
  payload: {
    title?: string;
    description?: string;
    visitedAt?: Date;
  };
};

export type TravelPlanAddSpotEvent = {
  actionType: "ADD_SPOT";
  travelPlanId: string;
  travelPlanSpotId: string;
  travelPlanSpot: TravelPlanSpot;
};

export type TravelPlanEditSpotEvent = {
  actionType: "EDIT_SPOT";
  travelPlanId: string;
  travelPlanSpotId: string;
  travelPlanSpot: TravelPlanSpot;
};

export type TravelPlanDeleteSpotEvent = {
  actionType: "DELETE_SPOT";
  travelPlanId: string;
  travelPlanSpotId: string;
};

export type TravelPlanDeleteEvent = {
  actionType: "DELETE";
  travelPlanId: string;
};

export type TravelPlanUpdateEvent =
  | TravelPlanEditProfileEvent
  | TravelPlanAddSpotEvent
  | TravelPlanEditSpotEvent
  | TravelPlanDeleteSpotEvent
  | TravelPlanDeleteEvent;

export const reduceTravelPlanUpdateEvent = (
  prevSnapshot: TravelPlan,
  event: TravelPlanUpdateEvent
): TravelPlan | Error => {
  const { actionType, travelPlanId } = event;
  let reduced: TravelPlan | Error;

  if (actionType == "EDIT_PROFILE") {
    const { title, description, visitedAt } = event.payload;
    const draft = { ...prevSnapshot };
    if (title != null) {
      draft.title = title;
    }
    if (description != null) {
      draft.description = description;
    }
    if (visitedAt != null) {
      draft.visitedAt = visitedAt;
    }
    reduced = draft;
  } else if (actionType == "ADD_SPOT") {
    const { travelPlanSpots: prevSpots, ...restProps } = prevSnapshot;
    const travelPlanSpots = [...prevSpots, event.travelPlanSpot];
    reduced = { ...restProps, travelPlanSpots };
  } else if (actionType == "EDIT_SPOT") {
    const { travelPlanSpots: prevSpots, ...restProps } = prevSnapshot;
    // 該当のtravelPlanSpotだけを置き換える
    const travelPlanSpots = prevSpots.map((s) =>
      s.travelPlanSpotId === event.travelPlanSpotId ? event.travelPlanSpot : s
    );
    reduced = { ...restProps, travelPlanSpots };
  } else if (actionType == "DELETE_SPOT") {
    const { travelPlanSpots: prevSpots, ...restProps } = prevSnapshot;
    // 該当のtravelPlanSpotを取り除く
    const travelPlanSpots = prevSpots.filter((s) => s.travelPlanSpotId !== event.travelPlanSpotId);
    reduced = { ...restProps, travelPlanSpots };
  } else if (actionType == "DELETE") {
    reduced = Error("TravelPlan deleted");
  } else {
    const exhaustive: never = actionType;
    return Error("Unsupported ActionType");
  }
  return reduced;
};

export type Unsubscribe = () => void;

export const subscribeRemoteTravelPlan = (
  travelPlanId: string,
  onUpdate: (snapshot: TravelPlan) => void
): Unsubscribe => {
  // ローカル上にTravelPlanを保管する変数
  // undefinedは、未取得もしくはエラーなどにより再取得中であることを表す
  let snapshot: TravelPlan | undefined;

  // Unsubscribeを呼び出された際に、処理を中止するための関数を格納する
  const cleanupFunctions: Map<string, () => void> = new Map();

  // 現在のTravelPlanの状態を削除し、サーバーから再取得する
  const invalidateSnapshot = () => {
    snapshot = undefined;
    fetchTravelPlan();
  };

  // 最新のTravelPlanの状態を (次のUpdateEvent適用のために) 保管し、またコールバック関数に渡す
  const updateSnapshot = (nextSnapshot: TravelPlan) => {
    snapshot = nextSnapshot;
    onUpdate(snapshot);
  };

  // TravelPlan全体をサーバーから取得する
  const fetchTravelPlan = async (): Promise<void> => {
    const abortController = new AbortController();

    const cleanupFunctionKey = "fetchTravelPlan";
    const abortFetch = () => {
      abortController.abort();
    };
    cleanupFunctions.set(cleanupFunctionKey, abortFetch);

    const fetchConfig: FetchConfig = { signal: abortController.signal };
    const response = await client.user.travel_plan._travel_plan_id(travelPlanId).$get({ config: fetchConfig });
    cleanupFunctions.delete(cleanupFunctionKey);

    const visitedAt = response.visitedAt == null ? undefined : new Date(response.visitedAt);
    const travelPlan: TravelPlan = {
      title: response.title,
      description: response.description,
      visitedAt,
      travelPlanSpots: response.travelPlanSpots,
    };

    updateSnapshot(travelPlan);
  };

  // サーバーからTravelPlanUpdateEventを受信し、ローカルのTravelPlanに同じ操作を反映させる
  const processEvent = () => {
    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_API_URL}/user/travel_plan/${travelPlanId}/subscribe_update`
    );

    const cancelEventSource = () => {
      eventSource.close();
    };
    cleanupFunctions.set("processEvent", cancelEventSource);

    eventSource.onmessage = (me: MessageEvent<unknown>) => {
      handleUpdateEvent(me.data as TravelPlanUpdateEvent);
    };
  };

  // コールバック関数: サーバーから受け取ったTravelPlanUpdateEventをローカルに反映させる
  const handleUpdateEvent = (event: TravelPlanUpdateEvent) => {
    if (snapshot == null) {
      return;
    }

    const reduced = reduceTravelPlanUpdateEvent(snapshot, event);
    if (reduced instanceof Error) {
      invalidateSnapshot();
      return;
    }

    updateSnapshot(reduced);
  };

  // 上で定義した関数を利用し、サーバー⇒ローカル方向のTravelPlanの同期を開始する
  fetchTravelPlan();
  processEvent();

  // Unsubscribeされた時点で、cleanupFunctionsに登録されている関数をすべて呼び出す
  const cleanup = () => {
    for (const func of cleanupFunctions.values()) {
      func();
    }
  };

  return cleanup;
};
