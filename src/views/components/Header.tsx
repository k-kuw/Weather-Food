import { memo } from "react";

const Header = memo(() => {
  // 現在時刻の表示
  const getCurrentDate = () => {
    const _doubleDigits = (num: any) => {
      num += ''
      if(num.length === 1) {
        num = `0${num}`
      }
      return num
    }
    const currentDate = new Date()
    const year = currentDate.getFullYear();
    const month = _doubleDigits(currentDate.getMonth()+1)
    const date = _doubleDigits(currentDate.getDate());
    const hour = _doubleDigits(currentDate.getHours());
    const min = _doubleDigits(currentDate.getMinutes());
    console.log(currentDate)
    return `${year}年${month}月${date}日 ${hour}:${min}`
  }

  setInterval(()=>getCurrentDate(), 60000)


  return (
    <>
      <div>
        <h1 className="display-1 text-info fw-bold text-center">おすすめ料理</h1>
      <div className="balloon text-center">~時間を選ぶと天気情報とおすすめ料理が出てくるサイト~</div>
        <p className="text-end">現在時刻：{getCurrentDate()}</p>
      <hr />
      </div>
      </>
  );
});

export default Header;
