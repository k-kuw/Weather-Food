import { useLayoutEffect } from "react";

const GetGiocode = () => {

  useLayoutEffect(() => {
      //レシピ情報api取得(Reduxから取得したcategoryId使用)
      const getGiocodeData = async () => {
        const giocodeData = await fetch(
          "https://api.openweathermap.org/geo/1.0/direct?q=とうきょう&limit=1&appid=6c443236acc04da21c71a330f1d6366e&lang=ja"
        );
        const getGiocode = await giocodeData.json();
        console.log("gio", getGiocode)
      };
      getGiocodeData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<p>gio</p>)

}

export default GetGiocode
