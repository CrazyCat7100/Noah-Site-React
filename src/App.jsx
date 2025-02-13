import { useState } from 'react'
import MainPage from './pages/MainPage'
import LightwavePage from './pages/LightwavePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GijoePage from './pages/GijoePage'

import DarkmoonPage from './pages/DarkmoonPage'
import CoffeePage from './pages/CoffeePage'
import ProjectLance from './pages/ProjectLance'
import ShieldsPage from './pages/ShieldsPage'
import DicePage from './pages/DicePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lightwave" element={<LightwavePage />} />
        <Route path="/gijoe" element={<GijoePage />} />
        <Route path='/darkmoon' element={<DarkmoonPage/>}></Route>
        <Route path='/coffee' element={<CoffeePage/>}></Route>
        <Route path='/projectlance' element={<ProjectLance/>}></Route>
        <Route path='/shields' element={<ShieldsPage/>}></Route>
        <Route path='/dice' element={<DicePage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
