// 一つの天気api情報型定義
type Weather = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

// 全天気api情報型定義
type WeatherData = {
  cod: string;
  message: number;
  cnt: number;
  list: Weather[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

// レシピapi情報型定義
type Recipe = {
  foodImageUrl: string;
  mediumImageUrl: string;
  nickname: string;
  pickup: number;
  rank: string;
  recipeCost: string;
  recipeDescription: string;
  recipeId: number;
  recipeIndication: string;
  recipeMaterial: string[];
  recipePublishday: string;
  recipeTitle: string;
  recipeUrl: string;
  shop: number;
  smallImageUrl: string;
};

export type { Weather, WeatherData, Recipe };
