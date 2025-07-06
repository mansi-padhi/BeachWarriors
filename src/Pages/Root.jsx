import React from 'react'
import { Outlet } from 'react-router-dom' 
import  Navbar  from '../Components/Navbar'

function Root() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <Outlet />
    </div>
  )
}

export default Root