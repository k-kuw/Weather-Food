import { useAppDispatch } from "../redux/hooks";
import { setWeatherData } from "../redux/reducers/weatherDataSlice";
import { WeatherData } from "../types";

//天気情報api取得＋state管理(Redux)
const GetWeatherData = async () => {
  // Redux 天気情報格納用
  const dispatch = useAppDispatch();
  //天気情報api取得
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=35.69&lon=139.69&cnt=5&units=metric&appid=6c443236acc04da21c71a330f1d6366e"
  );
  const _weatherData: WeatherData = await res.json();
  // 取得した天気情報をReduxへ格納
  dispatch(setWeatherData(_weatherData.list));
};

export default GetWeatherData;
