import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Donate from './Pages/Donate'
import Donate_register from './Pages/Donate_register'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/get_donate' element={<Donate_register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
