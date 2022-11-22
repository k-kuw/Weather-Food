import { memo } from "react";
import { useAppSelector } from "../../redux/hooks";
import "../../styles.scss";
import ReccomendWeatherFood from "../../reccomendWeatherFood";

//レシピ情報api取得＋state管理(Redux)
const RecipeDisplay = memo(() => {

  // 選択された時間の天気を基におすすめレシピCategoryIdを取得処理
  ReccomendWeatherFood();


// Redux レシピstate取得
const recipe = useAppSelector(
  (state) => state.reducers.recipeDataReducer.recipeList[Math.floor(Math.random() * state.reducers.recipeDataReducer.recipeList.length)]
);

  return (
    <>
      {/* stateからのレシピの表示 */}
      {recipe && (
        <div className="text-center info">
          <h2 className="text-info">『おすすめ料理』</h2>
          <p>{recipe.recipeTitle}！！</p>
          <a href={recipe.recipeUrl}>
            <img
              src={recipe.foodImageUrl}
              alt=""
              className="d-inline"
            />
          </a>
          <p>{recipe.recipeDescription}</p>
          <br />
          <p>＊画像クリックでレシピの詳細画面へ</p>
        </div>
      )}
    </>
  );
});

export default RecipeDisplay;
