import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import HomeMap from './components/HomeMap'
import HappeningSoon from './components/HappeningSoon'

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start '>
      <Welcome />
      <HomeMap />
      <HappeningSoon />
      <section>
        <h1>OK Vine</h1>
        <h2>Food and Entertainment for Vinedale </h2>
      </section>
    </div>
  )
}

export default App
