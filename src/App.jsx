import { Route, Routes } from 'react-router-dom'
import Home from "../src/pages/Home";
import DaftarSoalWeekDua from "../src/pages/DaftarSoalWeekDua";
import Guide from "../src/pages/Guide";
import DaftarSoalNew from "./pages/DaftarSoalNew";
import DaftarSoalSlicing from "./pages/DaftarSoalSlicing";


const App = () => {

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path="/logic" element={<DaftarSoalNew/>} />
      <Route path="/logic-two" element={<DaftarSoalWeekDua/>} />
      <Route path="/project" element={<DaftarSoalSlicing/>} />
      <Route path="/guide" element={<Guide/>} />
    </Routes>
  )
}

export default App
