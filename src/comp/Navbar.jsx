import React from 'react'
import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'
import logo from '../assets/logo.png'

const LINKS = ["Features", "Pricing", "Testimonials", "Resources"];

const Navbar = () => {
  return (
    // Maine yahan se 'border-b' aur 'shadow-sm' hata diya hai
    <nav className="w-full bg-white relative z-50 px-6 py-4 md:px-10 md:py-6">
      
      <NavbarMobile links={LINKS} logo={logo} />
      <NavbarDesktop links={LINKS} logo={logo} />

    </nav>
  )
}

export default Navbar