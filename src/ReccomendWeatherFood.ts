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

  // レシピapi情報取得用のcategoryId設定関数
  const setreccomendCategoryId = (categoryId: string) => {
    dispatch(setReccomendRecipe(categoryId));
  };

  useEffect(() => {
    // 時間が選択された時、reccomendCategoryIdを選ぶ下記処理を行う
    if (selectedTime !== "loading") {
      console.log("天気", selectedTimeWeather[0].weather[0].main);
      console.log("気温", selectedTimeWeather[0].main.temp);
      const temperature = selectedTimeWeather[0].main.temp;
      // レシピapi情報取得用のcategoryId設定、気温による条件分岐
      // <  2  14-133 おかゆ・雑炊類
      if (temperature < 2) {
        setreccomendCategoryId("14-133");
      }
      // <  4  23-399 寄せ鍋
      else if (temperature < 4) {
        dispatch(setReccomendRecipe("23-399"));
      }
      // <  6  23-391 おでん
      else if (temperature < 6) {
        dispatch(setReccomendRecipe("23-391"));
      }
      // <  8  30-308 シチュー
      else if (temperature < 8) {
        dispatch(setReccomendRecipe("30-308"));
      }
      // < 10  12-103 冬野菜
      else if (temperature < 10) {
        dispatch(setReccomendRecipe("12-103"));
      }
      // < 12  17-161	豚汁
      else if (temperature < 12) {
        dispatch(setReccomendRecipe("17-161"));
      }
      // < 14  30-306 グラタン
      else if (temperature < 14) {
        dispatch(setReccomendRecipe("30-306"));
      }
      // < 16  14-132 炊き込みご飯
      else if (temperature < 16) {
        dispatch(setReccomendRecipe("14-132"));
      }
      // < 18  30-307 カレー
      else if (temperature < 18) {
        dispatch(setReccomendRecipe("30-307"));
      }
      // < 20  31-323 ロールキャベツ
      else if (temperature < 20) {
        dispatch(setReccomendRecipe("31-323"));
      }
      // < 22  31-324 スペアリブ
      else if (temperature < 22) {
        dispatch(setReccomendRecipe("31-324"));
      }
      // < 24 	43-569 ピザ
      else if (temperature < 24) {
        dispatch(setReccomendRecipe("43-569"));
      }
      // < 26  15-137 ミートソース
      else if (temperature < 26) {
        dispatch(setReccomendRecipe("15-137"));
      }
      // < 28  16-383 冷やし中華
      else if (temperature < 28) {
        dispatch(setReccomendRecipe("16-383"));
      }
      // < 30  15-143 冷製パスタ
      else if (temperature < 30) {
        dispatch(setReccomendRecipe("15-143"));
      }
      // < 32  12-101 夏野菜
      else if (temperature < 32) {
        dispatch(setReccomendRecipe("12-101"));
      }
      // < 34  16-154 そうめん
      else if (temperature < 34) {
        dispatch(setReccomendRecipe("16-154"));
      }
      // 34 <  53-665 夏バテ対策
      else {
        dispatch(setReccomendRecipe("53-665"));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTime]);
};

export default ReccomendWeatherFood;
