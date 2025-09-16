import React from 'react'
import flLogo from '../assets/FL_Logo.webp'

const Footer = () => {
  return (
    <footer className='relative bg-gradient-to-b from-black to-gray-900 text-white'>
        <div className='absolute inset-0 opacity-5'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] animate-subtle-drift'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:32px_32px] animate-subtle-drift-slow opacity-50'></div>
        </div>
        <div className='absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-16'>
                <div className='lg:col-span-3 space-y-6 animate-on-scroll [transition-delay:100ms] opacity-100 translate-y-0'>
                    <div className='w-20 h-20 relative group'>
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                        <img src={flLogo} alt="" className='relative w-full h-full object-contain filter brightness-0 invert transform group-hover:scale-105 transition-transform duration-500' />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-blue-400">First Love Center</h3>
                        <p className='text-gray-400 text-sm leading-relaxed'> We believe in Jesus, soul winning and working for the Lord all day long.</p>
                    </div>
                    <div className="flex gap-3 pt-4">
                        <a href="https://www.facebook.com/firstlovecenter/" className='group relative'>
                        <div className='w-9 h-9 bg-[#1877F2] rounded flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-4 h-4 text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </div>
                        <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Facebook</span>
                    
                        </a>
                        <a href="https://www.youtube.com/channel/UCEBUZZ9Gyaek_l92J728Yuw" className='group relative'>
                        <div className='w-9 h-9 bg-[#FF0000] rounded flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube w-4 h-4 text-white"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                        </div>
                        <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Youtube</span>
                    
                        </a>
                        <a href="https://www.Instagram.com/firstlovecenter/" className='group relative'>
                        <div className='w-9 h-9 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram w-4 h-4 text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                        </div>
                        <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Instagram</span>
                    
                        </a>
                        <a href="https://www.twitter.com/firstlovecenter/" className='group relative'>
                        <div className='w-9 h-9 bg-[#1DA1F2] rounded flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter w-4 h-4 text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </div>
                        <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>Twitter</span>
                    
                        </a>
                    </div>
                </div>
                <div className='lg:col-span-3 space-y-5 animate-on-scroll [transition-delay:200ms] opacity-100 translate-y-0'>
                    <h3 className="text-lg font-semibold text-purple-400">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><a href="#whoweare" className='text-gray-400 font-normal hover:text-white animated-underline'>About Us</a></li>
                        <li><a href="#ourfounder" className='text-gray-400 font-normal hover:text-white animated-underline'>Our Founder</a></li>
                        <li><a href="#flchannel" className='text-gray-400 font-normal hover:text-white animated-underline'>First Love Channel</a></li>
                        <li><a href="#flmusic" className='text-gray-400 font-normal hover:text-white animated-underline'>First Love Music</a></li>
                         <li><a href="#giving" className='text-gray-400 font-normal hover:text-white animated-underline'>Giving</a></li>
                    </ul>
                </div>
                <div className='lg:col-span-3 space-y-5 animate-on-scroll [transition-delay:200ms] opacity-100 translate-y-0'>

                </div>
            </div>
        </div>
        

    </footer>
  )
}

export default Footer