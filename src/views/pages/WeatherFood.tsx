import Header from "../components/Header";
import "../../styles.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import TimeSelectButton from "../components/TimeSelectButton";
import Spinner from "react-bootstrap/Spinner";
import RecipeDisplay from "../components/RecipeDisplay";
import WeatherDisplay from "../components/WeatherDisplay";
import { setRecipeData } from "../../redux/reducers/recipeDataSlice";
import GetGiocode from "../components/Giocode";

const WeatherFood = memo(() => {
  // recipeData用dispatch定義
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);
  // TimeSelectButtonコンポーネントで取得した時間state取得
  const selectedTime = useAppSelector(
    (state) => state.reducers.timeReducer.time
  );
  // Redux どのカテゴリーからレシピを取得するか、categoryIdをstateから取得
  const reccomendCategoryId: string = useAppSelector(
    (state) => state.reducers.reccomendRecipeReducer.reccomendRecipeCategory
  );

  // 2重apiリクエストの1回目阻止用
  const firstReqBlock = useRef(true);

  // レシピ情報api取得
  useLayoutEffect(() => {
    if (reccomendCategoryId !== "30") {
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
        console.log("getRecipes", getRecipes);
        dispatch(setRecipeData(getRecipes.result));
        console.log("recipe-api", getRecipes.result);
      };
      getRecipeData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reccomendCategoryId]);

  // loading画面表示用
  useEffect(() => {
    // rakutenAPIが1秒間に1回以上リクエストを送るとエラーになるため、ReactStrictModeの2重apiリクエストに対して1回目を阻止
    if (process.env.NODE_ENV === "development") {
      if (firstReqBlock.current) {
        firstReqBlock.current = false;
        return;
      }
    }
    setLoading(true);
    if (!loading) {
    }
    setTimeout(() => setLoading(false), 1000);
    console.log(selectedTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTime]);

  return (
    <div>
      <Header />
      <GetGiocode />
      <TimeSelectButton />
      {selectedTime === "loading" ? (
        <p className="h3 text-info text-center content">
          時間を選択してください(^^)
        </p>
      ) : loading ? (
        <>
        <div className="d-flex justify-content-center spinner">
          <Spinner animation="border" variant="info" />
          </div>
          <div className="load">
          <img src={`https://1.bp.blogspot.com/-J6DhylEKdnA/WqihcAfcKWI/AAAAAAABKzk/d2002Ljcu6sKrB0H7RE5LRldWNjuPdTfwCLcBGAs/s800/cooking_chef_man_asia.png`} alt="料理人" />
          <h3>天気情報とおすすめレシピを取得中...</h3>
          <img src={`https://3.bp.blogspot.com/-1VPUxWB1TSA/WqiheF_xkMI/AAAAAAABKz0/CZI-Ro2gvR8LQqZf7BH7mMnW35HqnlhNACLcBGAs/s800/cooking_chef_woman_asia.png`} alt="料理人" />
          </div>
        </>
      ) : (
        <>
          <WeatherDisplay />
          <RecipeDisplay />
        </>
      )}
    </div>
  );
});

export default WeatherFood;
