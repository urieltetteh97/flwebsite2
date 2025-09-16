import React from 'react'
import introVideo from '../assets/flcsitevideo.mp4'


const Intro = () => {
  return (
    <div className='w-full relative min-h-screen overflow-x-hidden'>
      <video 
        autoPlay 
        loop 
        muted 
        className='absolute top-0 left-0 w-full h-full object-cover'
        src={introVideo}
        type='video/mp4'
      ></video>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      {/* Content */}
      <div className="relative z-10 py-8 px-4">
        <div className="flex min-h-[30vh] justify-center items-center">
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl transform hover:scale-110 transition-all duration-300 ease-in-out
           font-bold tracking-tight text-center px-4">First Love Church</h1>
        </div>
        <div className='relative h-1 w-48 md:w-64 mx-auto overflow-hidden rounded-full '>
          <div className='absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500'></div>
          <div className='absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-drift'></div>
        </div>
        <p className="text-white text-center text-xl sm:text-2xl md:text-3xl font-normal tracking-wider pt-6 sm:pt-10">Welcome Home</p>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-3 justify-center items-center pt-6 sm:pt-10 px-4">
   <button className='group relative w-64 sm:w-auto px-8 py-4 cursor-pointer bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300'>
    <div className='absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'> </div>
    <div className='absolute inset-0 bg-white/10'></div>
    <span className='relative z-10 text-lg font-medium text-white group-hover:text-white transition-colors duration-300'> Join Us This Weekend </span>

  </button>
          <button className='group relative cursor-pointer w-64 sm:w-auto px-8 py-4 bg-transparent border border-white/20 rounded-xl overflow-hidden transition-all duration-300'>
            <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <span className='relative z-10 text-lg font-medium text-white group-hover:text-white transition-colors duration-300'>
              Watch Online
              </span></button>
        </div>
        <footer className="flex justify-center items-center pt-12 md:pt-24">
          <p className="text-white text-center font-normal pb-5 md:pb-7">Scroll Down</p>
        </footer>
      </div>
      
    </div>
  )
}

export default Intro