import { useAppSelector } from "../../redux/hooks";

const RecipeDisplay = () => {
  // Redux レシピstate取得
  const recipes = useAppSelector(
    (state) => state.reducers.recipeReducer.recipeList
  );

  const recipe = recipes[Math.floor(Math.random() * recipes.length)];

  return (
    <>
      <p>レシピ</p>
      {/* stateからのレシピの表示 */}
      {recipes && (
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
