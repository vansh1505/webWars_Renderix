import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center justify-center h-screen text-3xl font-semibold bg-black text-white'>
      <p className='animate-pulse'> Welcome to Web Wars 2025</p>
      <p className='text-gray-400'>Team Renderix</p>
    </div>
      <Footer />
    </>
  )
}

export default App