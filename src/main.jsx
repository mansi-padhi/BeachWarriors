import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // ✅ Correct import
import './index.css'

import Root from  './Pages/Root'
import Home from './Pages/Home'
import VolunterDashBoard from './Pages/VolunterDashBoard'
import Event from './Pages/Event'
import Map from './Pages/Map'
import Waste from './Pages/Waste'
import EcoCoins from './Pages/EcoCoins'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Home />} />  
          <Route path="volunteer" element={<VolunterDashBoard />} />
          <Route path="/event" element={<Event />} />  
          <Route path="/map" element={<Map />} /> 
          <Route path="/waste" element={<Waste/>}/> 
          <Route path="/coins" element={<EcoCoins/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  
)
