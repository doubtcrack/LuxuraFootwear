import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home'

const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default Routess