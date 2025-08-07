import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css'
const Home=lazy(()=>import("./Pages/Home"))  
const About=lazy(()=>import("./Pages/About"))  
const Services=lazy(()=>import("./Pages/Services"))  
const Contact=lazy(()=>import("./Pages/Contact"))  
const ScrollToUp=lazy(()=>import("./utils/ScrollToUp"))  ;
import NotFoundPage from './Pages/PageNotFound';
import Loader  from "./Pages/Loader"
function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense  fallback={<Loader/>}>
    <BrowserRouter>
    <ScrollToUp/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='*' element={<NotFoundPage/>} />
      
    </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default App
