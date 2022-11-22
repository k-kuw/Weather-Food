import { memo, useLayoutEffect, useState } from "react";
import Stack from "react-bootstrap/Stack";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTime } from "../../redux/reducers/timeSlice";
import type { Weather, WeatherData } from "../../types";
import Spinner from "react-bootstrap/Spinner";
import { setWeatherData } from "../../redux/reducers/weatherDataSlice";

//時間選択ボタンコンポーネント
const TimeSelectButton = memo(() => {
  // 選択された時間のstate用dispatch定義
  const dispatch = useAppDispatch();

  // 選択された時間のstate管理
  const setSelectedTime: any = (selectedTimeButton: any) => {
    console.log("se", selectedTimeButton);
    dispatch(setTime(selectedTimeButton));
  };
  // 天気情報データのstate取得
  const weatherData: Weather[] = useAppSelector(
    (state) => state.reducers.weatherReducer.weatherList
  );
  // 時間選択ボタンのチェックボックス判定用このコンポーネント内のみの使用のためuseState
  const [checked, setChecked] = useState("");

  const [disabled, setDisabled] = useState(false);

  // 天気api情報取得処理
  useLayoutEffect(() => {
    //天気情報api取得＋state管理(Redux)
    const getWeatherData = async () => {
      //天気情報api取得
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=35.69&lon=139.69&cnt=5&units=metric&lang=ja&appid=6c443236acc04da21c71a330f1d6366e"
      );
      const _weatherData: WeatherData = await res.json();
      const cuttedOldWeather = _weatherData.list.splice(2, 3);
      // 取得した天気情報をReduxへ格納
      dispatch(setWeatherData(cuttedOldWeather));
    };
    getWeatherData();
  }, [dispatch]);

  // api時間を日本表記に変換
  const translateTime = (apiTime: any) => {
    const _translateTime = apiTime
      .replace(/-/, "年")
      .replace(/-/, "月")
      .replace(/ /, "日 ")
      .replace(/.{3}$/, "");

    return _translateTime;
  };

  return (
    <>
      {/* 天気情報から情報のある時間をreact-bootstrapコンポーネントで表示 */}
      <Stack direction="horizontal" gap={3} className="row">
        {/* stateが初期状態(loading)でない場合(天気情報apiの取得ができた) */}
        {weatherData.length > 1 ? (
          weatherData.map((info: Weather) => {
            return (
              // react-bootstrapコンポーネント使用
              <ToggleButton
                className="col selected-button"
                key={info.dt_txt}
                id={info.dt_txt}
                type="radio"
                variant={"outline-info"}
                name="time"
                value={info.dt_txt}
                //valueと一致したボタンをチェック
                checked={checked === info.dt_txt}
                disabled={disabled}
                onChange={(e) => {
                  // 押したボタンのvalueをcheckedに設定
                  setChecked(e.target.value);
                  // 選択された時間のstate管理
                  setSelectedTime(e.target.value);
                  setDisabled(true);
                  setTimeout(() => setDisabled(false), 1000);
                }}
              >
                {translateTime(info.dt_txt)}
              </ToggleButton>
            );
          })
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="info" />
          </div>
        )}
      </Stack>
    </>
  );
});

export default TimeSelectButton;
