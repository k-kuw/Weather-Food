import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import TimeSelectButton from "../components/TimeSelectButton";
import WeaterDisplay from "../components/WeatherDisplay";
import { setWeatherData } from "../../redux/reducers/weatherDataSlice";
import type { WeatherData } from "../../types";

// 天気情報表示コンポーネント
const WeatherInfo = () => {
  // 天気情報データのstate用dispatch定義
  const dispatch = useAppDispatch();

  //天気情報api取得＋state管理(Redux)
  // 天気情報はページを開いた際に一度のみ情報を取得
  useEffect(() => {
    const getWeatherData = async () => {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=35.69&lon=139.69&cnt=5&units=metric&appid=6c443236acc04da21c71a330f1d6366e"
      );
      const _weatherData: WeatherData = await res.json();
      // 天気情報データリストのstate管理
      dispatch(setWeatherData(_weatherData.list));
    };
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <p>bbb</p>
      <WeaterDisplay />
      <TimeSelectButton />
    </>
  );
};

export default WeatherInfo;
