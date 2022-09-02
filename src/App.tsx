import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/404'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './pages'

function App(): React.ReactElement {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
