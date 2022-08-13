import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/404'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
