import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#1e2a38]
 text-white py-4 '>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>Task</span>
      </div>
      <ul className="flex gap-5 mx-9">
        <li className="cursor-pointer font-medium text-white hover:text-gray-300 transition-colors duration-200">Home</li>
        <li className="cursor-pointer font-medium text-white hover:text-gray-300 transition-colors duration-200">Your Task</li>
      </ul>

    </nav>
  )
}

export default Navbar
