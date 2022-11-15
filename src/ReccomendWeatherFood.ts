import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setReccomendRecipe } from "./redux/reducers/reccomendSlice";
import { Weather } from "./types";

// 選択した時間の天気情報（天気、気温）を基に、おすすめ料理カテゴリIDを取得する関数
const ReccomendWeatherFood = () => {
  // 天気情報のstate取得
  const weatherData: Weather[] = useAppSelector(
    (state) => state.reducers.weatherReducer.weatherList
  );
  // TimeSelectButtonコンポーネントで選択した時間のstate取得
  const selectedTime = useAppSelector(
    (state) => state.reducers.timeReducer.time
  );

  // おすすめレシピ取得のためのcategoryId state用dispatch定義
  const dispatch = useAppDispatch();

  // 全天気情報から、選択された時間の天気情報のみfilterで取得
  const selectedTimeWeather = weatherData.filter(
    (oneWeather: Weather) => oneWeather.dt_txt === selectedTime
  );
  console.log("this", selectedTimeWeather);

  // レシピapi情報取得用のcategoryId設定関数
  const setreccomendCategoryId = (categoryId: number) => {
    dispatch(setReccomendRecipe(categoryId));
  };

  useEffect(() => {
    // 時間が選択された時、下記categoryIdの処理を行う
    if (selectedTime !== "loading") {
      console.log("天気", selectedTimeWeather[0].weather[0].main);
      console.log("気温", selectedTimeWeather[0].main.temp);
      // レシピapi情報取得用のcategoryId設定、気温による条件分岐
      if (selectedTimeWeather[0].main.temp < 12.5) {
        setreccomendCategoryId(17)
      } else if (selectedTimeWeather[0].main.temp < 15) {
        // 選択された時間のstate管理
        setreccomendCategoryId(23)
      } else {
        setreccomendCategoryId(14)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTime]);
};

export default ReccomendWeatherFood;
