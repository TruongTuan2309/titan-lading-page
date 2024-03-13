import AppRoute from '@/routers/AppRoute'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}

export default App
