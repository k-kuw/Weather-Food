import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LocationRegister from "../src/views/pages/LocationRegister"
import WeatherFood from "../src/views/pages/WeatherFood";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LocationRegister />} />
      <Route path="weatherfood" element={<WeatherFood />} >
        <Route path=':location' element={<WeatherFood />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
