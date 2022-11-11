import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Weather } from "../../types";
// import type {RootState} from './store'

interface WeatherState {
  weatherList: Weather[];
}

const initialState = {
  weatherList: [
    {
      dt: 0,
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0,
      },
      weather: [
        {
          id: 0,
          main: "loading",
          description: "loading",
          icon: "loading",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0,
        deg: 0,
        gust: 0,
      },
      visibility: 0,
      pop: 0,
      rain: {
        "3h": 0,
      },
      sys: {
        pod: "loading",
      },
      dt_txt: "loading",
    },
  ],
} as WeatherState;

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    setWeatherData: (
      state = initialState,
      action: PayloadAction<Weather[]>
    ) => {
      state.weatherList = action.payload;
    },
  },
});

export const { setWeatherData } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
