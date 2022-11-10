import { useAppSelector } from "../../redux/hooks";
import type { Weather } from "../../types";

const WeaterDisplay = () => {
  // 天気情報のstate取得
  const weatherData: Weather[] = useAppSelector(
    (state) => state.reducers.weatherReducer.weatherList
  );
  // TimeSelectButtonコンポーネントで取得した時間state取得
  const selectedTime = useAppSelector(
    (state) => state.reducers.timeReducer.time
  );

  return (
    <>
      {/* stateが初期状態(loading)でない場合(天気情報apiの取得ができた) */}
      {weatherData.length > 1 &&
        // 天気情報と選択された時間のstateを比較し、選択された時間と一致する天気情報のみ表示
        weatherData.map((oneWeather: Weather) => {
          if (oneWeather.dt_txt === selectedTime) {
            return (
              <div key={oneWeather.dt_txt}>
                <p>{oneWeather.weather[0].main}</p>
                <p>{oneWeather.main.temp}℃</p>
              </div>
            );
          } else return null;
        })}
    </>
  );
};

export default WeaterDisplay;
