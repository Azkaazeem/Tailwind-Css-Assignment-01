import React from 'react'

const NavbarDesktop = ({ links, logo }) => {
  return (
    <div className="hidden md:grid grid-cols-3 items-center">
      {/* Left Links */}
      <div className="flex justify-start gap-8 text-gray-600 font-medium">
        {links.map(link => (
          <a key={link} href="#" className="hover:text-black transition">{link}</a>
        ))}
      </div>

      {/* Center Logo */}
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* Right Buttons */}
      <div className="flex justify-end items-center gap-8 font-medium">
        <a href="#" className="text-gray-600 hover:text-black">Company</a>
        <a href="#" className="text-gray-600 hover:text-black">Contact</a>
        <button className="px-6 py-2 border border-cyan-500 text-cyan-500 font-semibold rounded hover:bg-cyan-50 transition">
          Login
        </button>
      </div>
    </div>
  )
}

export default NavbarDesktop