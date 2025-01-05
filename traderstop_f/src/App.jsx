import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import ThemeContext from './context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Dashboard />
      </ThemeContext.Provider>
    </>
  )
}

export default App
