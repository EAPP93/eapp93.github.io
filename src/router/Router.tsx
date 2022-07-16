import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// imports components
import Home from '../pages/home/Home'
import NotFound from '../pages/404/NotFound'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
