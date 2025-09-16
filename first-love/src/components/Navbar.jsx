import React, { useState } from 'react'
import flLogo from '../assets/FL_Logo.webp'




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-black w-full p-4 sticky top-0 z-50 shadow-lg transition-all duration-300 ease-in-out">
        
            <div className='container px-4 mx-auto relative text-sm'>
              <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">

                  <a href='#' className="text-start cursor-pointer font-bold transform hover:scale-110 transition-all duration-300 ease-in-out
                   ">
                    <img src={flLogo} alt="logo" className='w-15' />
                   </a>
                   <ul className="hidden lg:flex pl-20 mx-auto justify-center space-x-8">
                    <li className='text-white font-semibold hover:text-purple-500 animated-underline'>
                      <a href='#'>JESUS</a>
                    </li>
                    <li className='text-white font-semibold hover:text-purple-500 animated-underline'>
                      <a href='#'>WHO WE ARE</a>
                    </li>
                    <li className='text-white font-semibold hover:text-purple-500 animated-underline'>
                      <a href='#'>EVENTS</a>
                    </li>
                    <li className='text-white font-semibold hover:text-purple-500 animated-underline'>
                      <a href='#'>BOOKS</a>
                    </li>
                    <li className='text-white font-semibold hover:text-purple-500 animated-underline'>
                      <a href='#'>GLOBAL</a>
                    </li>
                    <li className='text-white font-semibold hover:text-purple-500 animated-underline'>
                      <a href='#'>OUR STORIES</a>
                    </li>
                    <li className='text-white font-semibold hover:text-purple-500 animated-underline'>
                      <a href='#'>GET INVOLVED</a>
                    </li>
                    <li className='text-white font-semibold hover:text-purple-500 animated-underline'>
                      <a href='#'>CONNECT</a>
                    </li>
                    <li className='text-white font-semibold hover:text-purple-500 animated-underline'>
                      <a href='#'>LOCATION</a>
                    </li>
                    <li className='text-white font-semibold hover:text-purple-500 animated-underline'>
                      <a href='#giving'>GIVING</a>
                    </li>
                
                    
                </ul>
                </div>
                <button className="lg:hidden text-white focus:outline-none"
                  onClick={() => setMenuOpen(!menuOpen)}
                   aria-label="Toggle menu">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
                </button>
            </div>
             {menuOpen && (
          <ul
            className={`lg:hidden mt-4 bg-black rounded shadow-lg flex flex-col space-y-2 p-4
              transition-all duration-300 ease-in-out
              ${menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
              origin-top`}
            style={{ transformOrigin: 'top' }}
          >
            <li className='text-white font-bold hover:transition-colors duration-400 hover:bg-gray-900 cursor-pointer hover:py-1.5 hover:px-1.5 hover:rounded-lg'><a href='#'>JESUS</a></li>
            <li className='text-white font-bold hover:transition-colors duration-400 hover:bg-gray-900 cursor-pointer hover:py-1.5 hover:px-1.5 hover:rounded-lg'><a href='#'>WHO WE ARE</a></li>
            <li className='text-white font-bold hover:transition-colors duration-400 hover:bg-gray-900 cursor-pointer hover:py-1.5 hover:px-1.5 hover:rounded-lg'><a href='#'>EVENTS</a></li>
            <li className='text-white font-bold hover:transition-colors duration-400 hover:bg-gray-900 cursor-pointer hover:py-1.5 hover:px-1.5 hover:rounded-lg'><a href='#'>BOOKS</a></li>
            <li className='text-white font-bold hover:transition-colors duration-400 hover:bg-gray-900 cursor-pointer hover:py-1.5 hover:px-1.5 hover:rounded-lg'><a href='#'>GLOBAL</a></li>
            <li className='text-white font-bold hover:transition-colors duration-400 hover:bg-gray-900 cursor-pointer hover:py-1.5 hover:px-1.5 hover:rounded-lg'><a href='#'>OUR STORIES</a></li>
            <li className='text-white font-bold hover:transition-colors duration-400 hover:bg-gray-900 cursor-pointer hover:py-1.5 hover:px-1.5 hover:rounded-lg'><a href='#'>GET INVOLVED</a></li>
            <li className='text-white font-bold hover:transition-colors duration-400 hover:bg-gray-900 cursor-pointer hover:py-1.5 hover:px-1.5 hover:rounded-lg'><a href='#'>CONNECT</a></li>
            <li className='text-white font-bold hover:transition-colors duration-400 hover:bg-gray-900 cursor-pointer hover:py-1.5 hover:px-1.5 hover:rounded-lg'><a href='#'>LOCATION</a></li>
            <li className='text-white font-bold hover:transition-colors duration-400 hover:bg-gray-900 cursor-pointer hover:py-1.5 hover:px-1.5 hover:rounded-lg'><a href='#'>GIVING</a></li>
          </ul>
        )}
            </div>
        
        </nav>
    
  )
}

export default Navbar