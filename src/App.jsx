import { useState } from 'react'
import './App.css'
import HeroSection from './components/hero-section/hero-section.component'
import Navbar from './components/navbar/navbar.component'

function App() {

  return (
    <div className="app">
      <div className="app-body">
      <Navbar/>
      <hr />
      <HeroSection/>
      <hr />
      </div>
    </div>
  )
}

export default App
