import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Guidelines from './Components/Guidelines'
import Registration from './Components/Registration'
import CommitteeMembers from './Components/CommitteeMembers'
import Speakers from './Components/Speakers'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/members" element={<CommitteeMembers />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/about-gu" element={""} />
        <Route path="/about-ieeegusb" element={""} />
      </Routes>
      <Footer />
    </>
  )
}

export default App