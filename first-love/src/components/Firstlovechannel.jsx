import React from 'react'
import channelBg from '../assets/firstLove.webp'
import flChannel from '../assets/maxresdefault.jpg'

const Firstlovechannel = () => {
  return (
    <section id='#flchannel' className='relative min-h-screen bg-black py-20 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
            <img src={channelBg} alt="" className='w-full h-full object-cover opacity-75' />
            <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent'></div>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90'></div>
            <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay'></div>
        </div>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
          <div className="grid lg:grid-cols-2 gap-16 items-center ">
            
            <div className='text-white space-y-8 animate-on-scroll transition-all duration-1000 opacity-100 translate-y-0'>
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-start">First Love Channel</h1>
                <div className='h-1 w-24 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 rounded-full transform transition-all duration-1000 delay-300'></div>
                <p className='text-xl lg:text-2xl text-white/90 leading-relaxed font-light transform transition-all duration-1000 delay-500'>
              Your ALL ACCESS PASS to everything that is happening at FirstLove around the globe!</p>
             <button className='group relative cursor-pointer w-64 sm:w-auto px-8 py-4 bg-transparent border border-white/20 rounded-xl overflow-hidden transition-all duration-300'>
            <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <span className='relative z-10 text-lg font-medium text-white group-hover:text-white transition-colors duration-300'>
              Watch Online
              </span></button>
            </div>
            
          </div>
              <div className='relative animate-on-scroll transition-all duration-1000 delay-500 opacity-100 translate-y-0'>
            <div className='relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000'>
              <img src={flChannel} alt="" className='object-cover' />
            </div>
            </div>
            
          </div>
          
        </div>
      
      </section>
  )
}

export default Firstlovechannel