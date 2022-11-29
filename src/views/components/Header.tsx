import { memo } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setLocation } from "../../redux/reducers/locationSlice";
import { setTime } from "../../redux/reducers/timeSlice";



const Header = memo(() => {
  // 現在時刻の表示
  const getCurrentDate = () => {
    const _doubleDigits = (num: string) => {
      num += ''
      if(num.length === 1) {
        num = `0${num}`
      }
      return num
    }
    const currentDate = new Date()
    const year = currentDate.getFullYear();
    const month = _doubleDigits(`${currentDate.getMonth()+1}`)
    const date = _doubleDigits(`${currentDate.getDate()}`);
    const hour = _doubleDigits(`${currentDate.getHours()}`);
    const min = _doubleDigits(`${currentDate.getMinutes()}`);
    return `${year}年${month}月${date}日 ${hour}:${min}`
  }

  setInterval(()=>getCurrentDate(), 60000)

    // 地域設定のリンク入力時にgiocodeDataデータ初期化用
    const dispatch = useAppDispatch();
const resetGio = () => {
  dispatch(setTime("loading"))
  dispatch(setLocation([{
    country: "loading",
    name: "loading",
    lat: 0,
    lon: 0,
    local_names: {
      ar: "loading",
      be: "loading",
      bg: "loading",
      ca: "loading",
      cs: "loading",
      cy: "loading",
      da: "loading",
      de: "loading",
      el: "loading",
      en: "loading",
      eo: "loading",
      es: "loading",
      et: "loading",
      fa: "loading",
      fi: "loading",
      fr: "loading",
      he: "loading",
      hr: "loading",
      ia: "loading",
      io: "loading",
      is: "loading",
      it: "loading",
      ja: "loading",
      kn: "loading",
      ko: "loading",
      ku: "loading",
      la: "loading",
      lb: "loading",
      lt: "loading",
      lv: "loading",
      mi: "loading",
      mr: "loading",
      nl: "loading",
      oc: "loading",
      pl: "loading",
      pt: "loading",
      ru: "loading",
      sk: "loading",
      sl: "loading",
      sr: "loading",
      sv: "loading",
      ta: "loading",
      tg: "loading",
      th: "loading",
      tr: "loading",
      uk: "loading",
      vi: "loading",
      zh: "loading",
    }}]));
}
    

  return (
    <>
      <div>
        <h1 className="display-1 text-info fw-bold text-center">おすすめ料理</h1>
      <div className="balloon text-center">~天気情報からおすすめ料理が出てくるサイト~</div>
        <p className="text-end">現在時刻：{getCurrentDate()}</p>
         {window.location.href !== "http://localhost:3000/" &&
        <div className="text-end"><Link to={"/"} onClick={()=>{resetGio()}}>地域設定</Link></div>
        }
      <hr />
      </div>
      </>
  );
});

export default Header;
