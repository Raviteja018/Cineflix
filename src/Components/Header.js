import React from 'react'
// import cinemax from "../Images/cineMax.png";
import cineflix from "../Images/cineflix-logo.png"

export default function Header() {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className='w-44' src={cineflix} alt='logo'/>
    </div>
  )
}
