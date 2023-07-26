import { travelPlanState } from "@/atoms";
import { client } from "@/lib/aspida";
import { TravelPlan, TravelPlanSpot } from "@/utils/subscribeRemoteTravelPlan";
import { useRecoilCallback } from "recoil";

export const useUpdateSortIndex = () =>
  useRecoilCallback(
    ({ snapshot, set }) =>
      // このHookが返す関数のシグネチャー (引数と戻り値)
      (travelPlanId: string, travelPlanSpotId: string, sortIndex: number): void => {
        // Recoilのstateやバックエンドのエンドポイントは現状、TravelPlan全体を読み書きする必要がある
        const recoilValue = travelPlanState(travelPlanId);
        const travelPlan = snapshot.getLoadable(recoilValue).getValue();
        if (travelPlan == null) return;

        // sortIndexを更新するTravelPlanSpotをtargetSpotとして、要素番号と値を取得する
        const spots = travelPlan.travelPlanSpots;
        const targetSpotArrayIndex = spots.findIndex((spot) => spot.travelPlanSpotId === travelPlanSpotId);
        const targetSpot = spots[targetSpotArrayIndex];

        // 既存の配列やオブジェクトを破壊しないよう、シャローコピーして更新部分を上書き・再ソート
        const spotsNext: TravelPlanSpot[] = [...spots];
        spotsNext[targetSpotArrayIndex] = { ...targetSpot, sortIndex };
        spotsNext.sort((a, b) => a.sortIndex - b.sortIndex);
        const travelPlanNext: TravelPlan = { ...travelPlan, travelPlanSpots: spotsNext };

        // Recoilへ書き込んで画面に反映させる
        set(recoilValue, travelPlanNext);

        // サーバーにも同じ内容を送信する
        // 失敗した際の挙動をまだ規定していないことから、エラーハンドリングは行っていない
        client.user.travel_plan
          ._travel_plan_id(travelPlanId)
          .spot._travel_plan_spot_id(travelPlanSpotId)
          .$put({
            body: {
              id: travelPlanSpotId,
              tourismSpotId: targetSpot.tourismSpotId,
              comment: targetSpot.comment,
              minuteSincePrevious: targetSpot.minuteSincePrevious,
              sortIndex,
            },
          });
      },
    []
  );
