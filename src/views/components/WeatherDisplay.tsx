import { memo } from "react";
import { useAppSelector } from "../../redux/hooks";
import type { Weather } from "../../types";

const WeaterDisplay = memo(() => {
  // 天気情報のstate取得
  const weatherData: Weather[] = useAppSelector(
    (state) => state.reducers.weatherReducer.weatherList
  );
  // TimeSelectButtonコンポーネントで取得した時間state取得
  const selectedTime = useAppSelector(
    (state) => state.reducers.timeReducer.time
  );

  // 全天気情報から、選択された時間の天気情報のみfilterで取得
  const selectedTimeWeather = weatherData.filter((oneWeather: Weather) => oneWeather.dt_txt === selectedTime)

    // 天気を日本語に翻訳
    const translateWeather = () => {
      const _weather = selectedTimeWeather[0].weather[0].main
      if (_weather === "Sunny") {return "晴れ"} else if(_weather ==="Clouds") {return "くもり"} else if(_weather==="Rain") {return "雨"}
    }



  console.log(selectedTimeWeather)

  return (
    <>
    {/* 選択された時間の天気情報表示 */}
      {weatherData.length > 1 &&
           (
              <div key={selectedTimeWeather[0].dt_txt} className="text-center info">
                <h2 className="text-info">『天気』</h2>
                <h4>天候：{translateWeather()}　　気温：{selectedTimeWeather[0].main.temp}℃</h4>
                <img src={`https://openweathermap.org/img/wn/${selectedTimeWeather[0].weather[0].icon}@2x.png`} alt={selectedTimeWeather[0].weather[0].icon} />
              </div>
            )
       }
    </>
  );
});

export default WeaterDisplay;
