import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";

const RecipeDisplay = () => {
  // Redux レシピstate取得
  const recipes = useAppSelector(
    (state) => state.reducers.recipeReducer.recipeList
  );

  // TimeSelectButtonコンポーネントで取得した時間state取得
  const selectedTime = useAppSelector(
    (state) => state.reducers.timeReducer.time
  );

  // レシピデータ(配列)の4つのレシピのうち1つを格納用、このコンポーネントでのみの使用のためuseState利用
  const [recipe, setRecipe]: [any, any] = useState([]);

  // レシピデータ(配列)の4つのレシピのうち1つをランダム選択、ランダム選択が意図しないタイミングで起こるのを避けるため、useEffect内で第二引数を指定して使用
  useEffect(() => {
    const recipe: any = recipes[Math.floor(Math.random() * recipes.length)];
    // 1レシピをrecipeへ設定
    setRecipe(recipe);
  }, [recipes, selectedTime]);

  return (
    <>
      <p>レシピ</p>
      {/* stateからのレシピの表示 */}
      {recipe && (
        <div key={recipe.foodImageUrl}>
          <p>{recipe.recipeTitle}</p>
          <a href={recipe.recipeUrl}>
            <img
              src={recipe.foodImageUrl}
              alt={recipe.recipeTitle}
              style={{ width: "200px" }}
            />
          </a>
        </div>
      )}
    </>
  );
};

export default RecipeDisplay;
