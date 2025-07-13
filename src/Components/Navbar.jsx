import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between px-5 py-3 bg-gray-100 w-auto md:px-10'>
        <h1 className='text-xl md:text-3xl'>LogistiX</h1>
     <div className='flex gap-5 md:gap-23 md:text-xl '>
      <NavLink className={(e)=>e.isActive?"text-blue-800":""}  to="/">Home</NavLink>
      <NavLink className={(e)=> e.isActive?"text-blue-800":""} to="/about">About us</NavLink>
      <NavLink className={(e)=>e.isActive?"text-blue-800":""} to="/login" >Login</NavLink>
      </div>
      </div>
    </>
  )
}

export default Navbar



