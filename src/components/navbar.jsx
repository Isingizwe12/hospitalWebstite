import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='bg-white shadow-sm flex justify-between items-center py-6 mx-auto px-6'>
        <span className='text-gray-700 font-medium cursor-pointer hover:opacity-80'>H.M</span>
        <div>
            <ul className='flex gap-3 text-gray-700 font-medium '>
                <li className='cursor-pointer hover:opacity-80'><Link to='/'>Home</Link></li>
                <li className='cursor-pointer hover:opacity-80'><Link to='/about'>About</Link></li>
                <li className='cursor-pointer hover:opacity-80'><Link to='/doctors'>Doctors</Link></li>
                <li className='cursor-pointer hover:opacity-80'><Link to='/services'>Services</Link></li>
                
            </ul>
        </div>
        <div>
            <button className='bg-blue-600 py-2 px-4 rounded text-white hover:opacity-85 cursor-pointer'>Contact Us</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
