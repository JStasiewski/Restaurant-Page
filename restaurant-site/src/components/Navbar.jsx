import React from 'react'
import logo from '../photos/logo.png'

const Navbar = () => {
  return (
    <div className='bg-black flex justify-between'>
      <div className='w-1/4'/>
      <img src={logo}/>
      <div className='flex justify-end text-white self-center text-right w-1/4'>
        <button className='flex px-3 py-2 m-2 rounded-md hover:bg-gray-900 border-solid border-2 border-white'>Menu</button>
      </div>
    </div>
  )
}

export default Navbar