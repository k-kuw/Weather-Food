import GetRecipeData from "../../apis/foodRecipe-api";
import RecipeDisplay from "../components/RecipeDisplay";
import ReccomendWeatherFood from "../../reccomendWeatherFood"
import { memo } from "react";


// おすすめレシピ表示コンポーネント
const FoodInfo = memo(() => {
  // 選択された時間の天気を基におすすめレシピCategoryIdを取得処理
  ReccomendWeatherFood()
  // レシピapi情報取得処理
  GetRecipeData()

  return (
    <>
      <p>おすすめ料理</p>
      <RecipeDisplay />
    </>
  );
});

export default FoodInfo;
