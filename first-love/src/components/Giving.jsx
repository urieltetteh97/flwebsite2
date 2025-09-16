import React from 'react'

const Giving = () => {
  return (
    <section id='#giving' className='flex items-center text-center w-full min-h-screen bg-gradient-to-b from-blue-950 to-black justify-center'>
      <div className="flex flex-col items-center gap-4">
        <h1 className='text-white text-7xl md:text-6xl pt-8 font-bold text-center'>Giving</h1>
        <div className='h-1 w-24 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 rounded-full transform transition-all duration-1000 delay-300'></div>
        <p className='text-white text-xl md:text-2xl max-w-3xl font-light py-2.5 px-4 tracking-tight'> You can give to the First Love Church if you've been blessed by any of our services in person or online. God bless you!</p>
      <button className='group inline-flex items-center cursor-pointer px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-white font-medium transition-all duration-300 backdrop-blur-sm'>
              <span>CLICK HERE TO GIVE</span>
              <svg className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round'strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' ></path>
              </svg>
              </button>
      </div>
      
      
        
    </section>
  )
}

export default Giving