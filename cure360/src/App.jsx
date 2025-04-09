import React from 'react'
import LandingPage from './LandingPage'
import { BrowserRouter, Route, Routes  } from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
