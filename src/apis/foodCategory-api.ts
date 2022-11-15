// TODO 使うかどうか不明

import { useEffect, useRef } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setCategoryData } from "../redux/reducers/categorySlice";

//レシピカテゴリー情報api取得＋state管理(Redux)
const GetCategoryData = async () => {
  const dispatch = useAppDispatch();

  const refFirstRef = useRef(true);
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if (refFirstRef.current) {
        refFirstRef.current = false;
        return;
      }
    }
    const getCategoryData = async () => {
      const categoryData = await fetch(
        "https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1029602151620471388&categoryType=large"
      );
      const getCategories = await categoryData.json();
      dispatch(setCategoryData(getCategories.result));
    };
    getCategoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default GetCategoryData;

// 1029602151620471388
