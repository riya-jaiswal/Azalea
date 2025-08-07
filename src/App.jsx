import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import ScrollToUp from './utils/ScrollToUp';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <ScrollToUp/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/Contact' element={<Contact/>} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
