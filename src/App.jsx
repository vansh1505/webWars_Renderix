import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Guidelines from './Components/Guidelines'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/guidelines" element={<Guidelines />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App