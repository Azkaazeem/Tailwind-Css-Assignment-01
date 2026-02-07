import React from 'react'
import '../style/navbar.css'

const Navbar = () => {
  return (
    <>
      <nav class="w-full bg-white py-6 px-10 shadow-sm border-b">
        
        <div class="grid grid-cols-3 items-center">

            <div class="flex justify-start gap-8 text-gray-600 font-medium text-sm lg:text-base">
                <a href="#" class="hover:text-black">Features</a>
                <a href="#" class="hover:text-black">Pricing</a>
                <a href="#" class="hover:text-black">Testimonials</a>
                <a href="#" class="hover:text-black">Resources</a>
            </div>

            <div class="flex justify-center">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle_Logo.svg/1200px-Circle_Logo.svg.png" 
                    alt="Circle Logo" 
                    class="h-10 w-auto"
                />
            </div>

            <div class="flex justify-end items-center gap-8 font-medium text-sm lg:text-base">
                <a href="#" class="text-gray-600 hover:text-black">Company</a>
                <a href="#" class="text-gray-600 hover:text-black">Contact</a>
                <button class="px-6 py-2 border border-cyan-500 text-cyan-500 font-semibold rounded hover:bg-cyan-50 transition">
                    Login
                </button>
            </div>

        </div>
    </nav>
    </>
  )
}

export default Navbar