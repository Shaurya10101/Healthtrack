import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Features from './components/Features'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Navbar />
      <Features />
    </Box>
  )
}

export default App
