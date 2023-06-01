// import * as React from "react";
import Footer from "./components/Footer";
import { useState } from 'react'
import Navbar from './components/Navbar'
import Features from './components/Features'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Navbar />
      <Features />
      <Footer/>
    </Box>
  )
}

export default App;