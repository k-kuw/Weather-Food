import GetCategoryData from "../../apis/foodCategory-api";
import GetRecipeData from "../../apis/foodRecipe-api";
import RecipeDisplay from "../components/RecipeDisplay";
import ReccomendWeatherFood from "../../ReccomendWeatherFood";
import { memo } from "react";


// おすすめレシピ表示コンポーネント
const FoodInfo = memo(() => {
  // レシピapi情報取得処理
  GetRecipeData()
  // レシピカテゴリーapi情報取得処理
  GetCategoryData()
  // 選択された時間の天気を基におすすめレシピCategoryIdを取得処理
  ReccomendWeatherFood()
  return (
    <>
      <p>おすすめ料理</p>
      <RecipeDisplay />
    </>
  );
});

export default FoodInfo;
