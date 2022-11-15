import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTime } from "../../redux/reducers/timeSlice";
import type { Weather } from "../../types";

//時間選択ボタンコンポーネント
const TimeSelectButton = memo(() => {
  // 選択された時間のstate用dispatch定義
  const dispatch = useAppDispatch();
  
  // 選択された時間のstate管理
  const setSelectedTime: React.ChangeEventHandler<HTMLSelectElement> = (
    selectedTimeButton
  ) => {
    dispatch(setTime(selectedTimeButton.target.value));
  };
  // 天気情報データのstate取得
  const weatherData: Weather[] = useAppSelector(
    (state) => state.reducers.weatherReducer.weatherList
  );

  return (
    <>
      {/* 天気情報から情報のある時間をセレクトボタンで表示 */}
      <select
        name="time"
        onChange={setSelectedTime}
        defaultValue="未選択"
      >
        <option value="未選択">時間を選択してください</option>
        {/* stateが初期状態(loading)でない場合(天気情報apiの取得ができた) */}
        {weatherData.length > 1 &&
          weatherData.map((info: Weather) => {
            return (
              <option value={info.dt_txt} key={info.dt_txt}>
                {info.dt_txt}
              </option>
            );
          })}
      </select>
    </>
  );
});

export default TimeSelectButton;
