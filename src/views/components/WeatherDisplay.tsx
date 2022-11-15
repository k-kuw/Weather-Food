import { memo } from "react";
import { useAppSelector } from "../../redux/hooks";
import type { Weather } from "../../types";

const WeaterDisplay = memo(() => {
  // 天気情報のstate取得
  const weatherData: Weather[] = useAppSelector(
    (state) => state.reducers.weatherReducer.weatherList
  );
  // TimeSelectButtonコンポーネントで取得した時間state取得
  const selectedTime = useAppSelector(
    (state) => state.reducers.timeReducer.time
  );

  // 全天気情報から、選択された時間の天気情報のみfilterで取得
  const selectedTimeWeather = weatherData.filter((oneWeather: Weather) => oneWeather.dt_txt === selectedTime)

  return (
    <>
    {/* 選択された時間の天気情報表示 */}
      {weatherData.length > 1 &&
        selectedTimeWeather.map((oneWeather: Weather) => {
            return (
              <div key={oneWeather.dt_txt}>
                <p>{oneWeather.weather[0].main}</p>
                <p>{oneWeather.main.temp}℃</p>
              </div>
            );
        })}
    </>
  );
});

export default WeaterDisplay;
