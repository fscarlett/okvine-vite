import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start gap-4 '>
      <Welcome />
      <section>
        <h1>OK Vine</h1>
        <h2>Food and Entertainment for Vinedale </h2>
      </section>
    </div>
  )
}

export default App
