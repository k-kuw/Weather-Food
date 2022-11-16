import TimeSelectButton from "../components/TimeSelectButton";
import WeaterDisplay from "../components/WeatherDisplay";
import GetWeatherData from "../../apis/weather-api";
import { memo } from "react";

// 天気情報表示コンポーネント
const WeatherInfo = memo(() => {
  // 天気api情報取得処理
  GetWeatherData();
  return (
    <>
      <WeaterDisplay />
      <TimeSelectButton />
    </>
  );
});

export default WeatherInfo;
