import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='px-6 md:px-16 lg:px-20 mt-20'>
      <div className='border-t border-[#E5E0D8] pt-14 pb-8'>
        <div className='grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-12 mb-12'>
          <div>
            <img className='mb-5 w-36' src={assets.logo2} alt="Logo" />
            <p className='text-[#7A7A7A] text-sm leading-7 max-w-xs'>
              Connecting patients with trusted healthcare professionals for seamless, stress-free medical appointments.
            </p>
          </div>

          <div>
            <p className='text-[#1E1E1E] text-xs font-semibold tracking-widest uppercase mb-5'>Company</p>
            <ul className='flex flex-col gap-3 text-[#7A7A7A] text-sm'>
              {['Home', 'About us', 'Delivery', 'Privacy Policy'].map(link => (
                <li key={link} className='hover:text-[#6B8F6E] cursor-pointer transition-colors duration-200'>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className='text-[#1E1E1E] text-xs font-semibold tracking-widest uppercase mb-5'>Get in Touch</p>
            <ul className='flex flex-col gap-3 text-[#7A7A7A] text-sm'>
              <li className='hover:text-[#6B8F6E] cursor-pointer transition-colors'>+1-212-456-7890</li>
              <li className='hover:text-[#6B8F6E] cursor-pointer transition-colors'>clinicsphere@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-[#E5E0D8] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2'>
          <p className='text-xs text-[#AAAAAA]'>© 2024 ClinicSphere.com — All rights reserved.</p>
          <p className='text-xs text-[#AAAAAA]'>Made with care for your health</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer