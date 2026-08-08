// import { useState } from 'react'
import './App.css'
import HomeMap from './components/HomeMap'
import HappeningSoon from './components/HappeningSoon'
import TopPicks from './components/TopPicks'
import Explore from './components/Explore'
import StatusSection from './components/StatusSection'
import HomeWelcome from './components/HomeWelcome'

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start '>
      <HomeWelcome />
      <StatusSection />
      <HomeMap />
      <HappeningSoon />
      <TopPicks />
      <Explore />
      <section>
        <h1>OK Vine</h1>
        <h2>Food and Entertainment for Vinedale </h2>
      </section>
    </div>
  )
}

export default App
