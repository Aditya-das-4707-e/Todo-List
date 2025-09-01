import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-4'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>Task</span>
        </div>
        <ul className="flex gap-5 mx-9">
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
