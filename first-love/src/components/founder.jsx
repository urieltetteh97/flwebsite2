import React from 'react'
import founderImage from '../assets/dhm.webp'


const founder = () => {
  return (
    <section id='#ourfounder' className='relative py-32 overflow-hidden 
    bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
     <div className='absolute inset-0 opacity-5 
     bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px]'></div> 
      <div className='absolute inset-0 md:hidden'>
        <div className='absolute inset-0 -top-32 h-[calc(100%+8rem)]'>
          <img src={founderImage} alt="" className='class="w-full h-full object-cover object-[center_30%] opacity-90"' />
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/70'></div>
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent'></div>
      </div>
      <div className='absolute inset-0 hidden md:block'>
        <div className='absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/50'></div>
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2'>
          <div className='relative z-10 space-y-8 px-4 sm:px-6 lg:px-8 animate-on-scroll transition-all duration-1000 delay-300 opacity-100 translate-y-0'>
            <h2 className='text-4xl md:text-5xl font-bold text-white hover:scale-105 transform transition-transform duration-500'>Dag Heward-Mills</h2>
            <div className='space-y-6 text-gray-300/90'>
            <p className="text-lg hover:text-white transition-colors duration-300">
              Dag Heward-Mills is a mega church pastor, and the founder of the United Denominations Originating from the Lighthouse Group of Churches. Spanning ten denominations, he oversees over 3000 churches on every continent of the globe. 
              Amongst these denominations is the First Love Church.
            </p>
            <p className="text-lg hover:text-white transition-colors duration-300">
              He is also a prolific, best-selling author, with the best selling Makarios collection of 60 books.
               His writings have been translated into over 50 languages all over the world.
            </p>
            <p className="text-lg hover:text-white transition-colors duration-300">
              Dag Heward-Mills' Healing Jesus Campaigns holds large evangelistic crusades all over Africa and are among the largest evangelistic efforts on the continent.
            </p>
            <p className="text-lg hover:text-white transition-colors duration-300">
              Dag can be heard or watched ministering to millions on various television, radio and internet platforms.
            </p>
            <p className="text-lg hover:text-white transition-colors duration-300 pt-4">
              Click below to find out more about our leader!
            </p>
            <div className="text-start py-5">
              <button className="rounded-full text-xl text-gray-500 hover:text-black hover:bg-white
              cursor-pointer border-1 py-4 px-6 backdrop-blur-md animate-pulse transition-all duration-300">
                <span className="text-center">Dag Heward-Mills</span>
              </button>
            </div>

            
            </div>
          </div>
          <div className='relative hidden md:block z-20 animate-on-scroll transition-all duration-1000 delay-500 opacity-100 translate-y-0'>
            <div className='absolute -top-64 -right-48 left-0 h-[160%] group'>
              <div className='absolute -inset-2 bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-75'></div>
              <img src={founderImage} alt="" className='relative h-full w-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105' />
            </div>
          </div>
        </div>
      </div>
        </section>
  )
}

export default founder