import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setRecipeData } from "../redux/reducers/recipeDataSlice";

//レシピ情報api取得＋state管理(Redux)
const GetRecipe = async () => {
  // Redux レシピ情報格納用
  const dispatch = useAppDispatch();

  // 2重apiリクエストの1回目阻止用
  const firstReqBlock = useRef(true);

  // Redux どのカテゴリーからレシピを取得するか、categoryIdをstateから取得
  const reccomendCategoryId = useAppSelector(
    (state) => state.reducers.reccomendRecipeReducer.reccomendRecipeCategory
  );

  useEffect(() => {
    // rakutenAPIが1秒間に1回以上リクエストを送るとエラーになるため、ReactStrictModeの2重apiリクエストに対して1回目を阻止
    if (process.env.NODE_ENV === "development") {
      if (firstReqBlock.current) {
        firstReqBlock.current = false;
        return;
      }
    }
    //レシピ情報api取得(Reduxから取得したcategoryId使用)
    const getRecipeData = async () => {
      const recipeData = await fetch(
        `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1029602151620471388&formatVersion=2&categoryId=${reccomendCategoryId}`
      );
      const getRecipes = await recipeData.json();

      // 取得したレシピ情報をReduxへ格納
      dispatch(setRecipeData(getRecipes.result));
    };
    getRecipeData();
  }, [dispatch, reccomendCategoryId]);
};

export default GetRecipe;
