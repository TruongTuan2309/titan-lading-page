import Header from '@/layouts/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutMain = () => {
  return (
    <div className=''>
      <Header />
      <Outlet />
    </div>
  )
}

export default LayoutMain
