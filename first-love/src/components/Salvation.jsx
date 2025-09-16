import React from 'react'
import soulsImage from '../assets/souls.webp'

const Salvation = () => {
  return (
    <section className='relative min-h-screen bg-black py-20 overflow-hidden '>
    <div className='absolute inset-0'>
        <img src={soulsImage} alt="" className='w-full h-full object-cover object-center opacity-75 ' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90'></div>
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay'></div>
    </div>
    <div className='absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-yellow-900/20'></div>
    <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div className='text-center md:text-left space-y-10 animate-on-scroll transition-all duration-1000 opacity-100 translate-y-0'>
          <div className='space-y-6'>
            <h2 className="text-5xl text-white md:text-6xl font-bold mb-4 tracking-tight"> Because We Care</h2>
            <div className='h-1.5 w-32 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 rounded-full md:mx-0 mx-auto'></div>
            <p className="text-white text-2xl md:text-3xl leading-relaxed font-light max-w-xl">
              Over 100 million salvation decisions recorded and counting!
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8'>
              <button className='group inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-white font-medium transition-all duration-300 backdrop-blur-sm'>
              <span>HEALING JESUS CRUSADE</span>
              <svg className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round'strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' ></path>
              </svg>
              </button>
            </div>
          </div>
         
        </div>
       <div className='relative animate-on-scroll transition-all duration-1000 delay-300 opacity-100 translate-y-0'>
            <div className='relative w-full max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] mx-auto'>
              <div className='relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000'>
                <button className='block relative group w-full'>
                  <img src="https://img.youtube.com/vi/ScEaZ7edDkc/maxresdefault.jpg" alt="" className='w-full rounded-3xl transform group-hover:scale-105 transition-transform duration-700' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0'></div>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <svg className='w-10 h-10 text-white fill-current' viewBox='0 0 24 24'> 
                        <path d='M8 5v14l11-7z' />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
    </section>
  )
}

export default Salvation