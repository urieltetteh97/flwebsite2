import React from 'react'
import pastorImage from '../assets/pastor.webp'

const Whoweare = () => {
  return (
    <section id='#whoweare' className='w-full min-h-screen bg-white py-16 md:py-20 animate-on-scroll transition-all duration-1000 opacity-100 translate-y-0'>
        <div className='flex flex-col items-center justify-center pb-20'>
            <h1 className="font-bold text-center text-6xl tracking-tight text-cyan-500"> The First Love Center</h1>
            <h3 className="text-black font-bold text-2xl py-3 sm:py-6 text-center">We believe in Jesus, soul-winning and
                <br /> working for the Lord all day long</h3>
                <div className='w-24 h-1 bg-red-800 mx-auto mb-8'></div>
        </div>
        <div className='grid md:grid-cols-2 gap-16 max-w-7xl mx-auto px-8 mb-16'>
          <div className='animate-on-scroll transition-all duration-1000 delay-300 opacity-100 translate-y-0'>
          <div className="prose prose-lg text-gray-600 text-start lg:text-justify  max-w-none md:ms-15">
            <p className='text-xl leading-relaxed mb-6'>
            In 2012, our founder Bishop Dag Heward-Mills was led by the Holy Spirit to begin a new denomination which he called the First Love Church.
             In a small chapel on the University of Ghana, Legon Campus,
             he gathered a few students and began a small church.

          </p>
          <p className='text-xl leading-relaxed mb-6'>
            A few years down the line, Pastor Joshua,
             with the blessing of his father, 
            started a new branch of First Love Church in East Legon where the headquarters stands today.
          </p>
          <p className='text-xl leading-relaxed mb-6'>
            A few years later, God has increased us into one of the largest churches in our city. 
            With over 10,000 members and in our new state of the art auditorium, 
            we are even more determined to see the name of Jesus lifted in the city of Accra.
          </p>
          <p className='text-xl leading-relaxed mb-6'>
            Today, thousands of young people gather as we preach holiness. We believe that everyone is welcome into the house of God.
             In a place where soulwinning is our passion, we have seen countless lives changed, saved and renewed in our church.</p>
          <p className='text-xl leading-relaxed mb-6'>
            We are a church that believes in Jesus, soul-winning and working for the Lord all day long.</p>
          <p className='text-xl leading-relaxed mb-6'>
            Join us for a life changing encounter with the Word of God, Worship and the Holy Spirit. 
            A Sunday at the First Love Center is more than just a church service, it's an experience!
          </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-start mt-12 md:mt-0 animate-on-scroll transition-all duration-1000 delay-500 opacity-100 translate-y-0'>
          <div className="relative group mb-4">
            <div className='absolute -inset-1 bg-gradient-to-b from-white via-white to-white/50 opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 blur-sm'></div>
            <div className='relative w-40 h-48 overflow-hidden ring-2 ring-white rounded-xl'>
              <img src={pastorImage} alt="Pastor Joshua Heward-Mills" className='object-cover w-full h-full transform transition duration-500 group-hover:scale-105' />
            </div>
          </div>
          <div className="text-center">
            <p className="text-black text-2xl font-bold">Joshua Dag Heward-Mills</p>
            <p className="text-gray-600 text-sm">Lead Pastor</p>
          </div>
          <div className="text-center mt-8">
            <button className="rounded-lg border-0 border-gray-500 py-3 px-3 bg-gray-100 cursor-pointer hover:bg-grey-500 hover:text-white hover:scale-105 transition-transform duration-500">
              <span className="text-black">LOCATE THE FIRST LOVE CENTER</span>
            </button>
          </div>
        </div>
          </div>
    </section>
    
  )
}

export default Whoweare