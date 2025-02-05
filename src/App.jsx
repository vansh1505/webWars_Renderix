import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Guidelines from './Components/Guidelines'
import Registration from './Components/Registration'
import CommotteeMembers from './Components/CommitteeMembers'
import About from './Components/About'
import Tracks from './Components/Topics'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/members" element={<CommotteeMembers />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App