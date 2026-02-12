import React from 'react'
import bgPattern from '../assets/bg.png'
import heroImage from '../assets/group.png'

const Hero = () => {
  return (
    <section className="relative bg-cyan-50 pt-16 pb-32 md:pt-28 md:pb-60 overflow-visible">
      
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={bgPattern} 
          alt="Pattern" 
          className="w-full h-full object-cover opacity-60" 
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          A powerful online engagement tool <br className="hidden md:block" />
          that’s intuitive and simple to use.
        </h1>
        
        <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          With stellar one-click reports and unmatched support, see how 
          Circle will make a difference in your business.
        </p>
        
        <button className="mt-8 px-8 py-3 bg-cyan-500 text-white font-bold rounded shadow-lg hover:bg-cyan-600 transition cursor-pointer">
          Get started free &gt;
        </button>

      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[40%] z-20 w-[90%] md:w-full max-w-5xl">
        <img 
          src={heroImage} 
          alt="Team" 
          className="w-full h-auto pt-40"
        />
      </div>

    </section>
  )
}

export default Hero