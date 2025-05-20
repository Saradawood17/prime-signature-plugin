import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'



function App() {
  return (
    <>
      <Header />

      <main >
        <Routes>
          <Route path="/" element={<Home />} />
         
          
          {/* Add more routes here */}
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
