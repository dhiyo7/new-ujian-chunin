import { Route, Routes } from 'react-router-dom'
import Home from "../src/pages/Home";
import DaftarSoal from "../src/pages/DaftarSoal";
import DaftarSoalWeekDua from "../src/pages/DaftarSoalWeekDua";
import Guide from "../src/pages/Guide";
import DaftarSoalNew from "./pages/DaftarSoalNew";


const App = () => {

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route path="/weeksatu" element={<DaftarSoal/>} /> */}
      <Route path="/weeksatunew" element={<DaftarSoalNew/>} />
      <Route path="/weekdua" element={<DaftarSoalWeekDua/>} />
      <Route path="/guide" element={<Guide/>} />
    </Routes>
  )
}

export default App
