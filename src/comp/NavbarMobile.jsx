import React, { useState } from 'react'

const NavbarMobile = ({ links, logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-8" />
        
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center gap-6 py-8 mt-4 border-t bg-gray-50 text-gray-600 font-medium animate-fade-in">
          {links.map(link => (
            <a key={link} href="#" className="hover:text-black">{link}</a>
          ))}
          <hr className="w-16 border-gray-300" />
          <a href="#" className="hover:text-black">Company</a>
          <a href="#" className="hover:text-black">Contact</a>
          <button className="px-8 py-2 border border-cyan-500 text-cyan-500 font-semibold rounded hover:bg-cyan-50">
            Login
          </button>
        </div>
      )}
    </div>
  )
}

export default NavbarMobile