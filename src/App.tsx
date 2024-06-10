import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mercury from './components/mercury'
import Venus from './components/venus'
import Earth from './components/earth'
import Mars from './components/mars'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mock PR - Feature Flags</h1>
      <div className="card">
        <p>
          Four Solar System planets are displayed based on arbitrary business
          requirements.
        </p>
        <p>
          In this PR, we create toggle logic for each planet based on arbitrary
          business requirements.
        </p>
      </div>
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
    </>
  )
}

export default App
