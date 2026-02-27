import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className='mx-4 my-16 rounded-3xl overflow-hidden bg-[#1E1E1E] relative'>

      <div className='absolute top-0 left-0 w-64 h-64 rounded-full bg-[#6B8F6E] opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none' />
      <div className='absolute bottom-0 right-[30%] w-48 h-48 rounded-full bg-[#D6E8D4] opacity-10 blur-2xl pointer-events-none' />

      <div className='flex flex-col md:flex-row items-center relative z-10'>
        <div className='flex-1 px-8 sm:px-12 md:px-16 py-12 md:py-16'>
          <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E] mb-4 block'>
            Get Started Today
          </span>
          <h2 className='font-["Playfair_Display",Georgia,serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6'>
            Book Appointments <br />
            <span className='text-[#D6E8D4] italic'>With 100+ Trusted</span> <br />
            Doctors
          </h2>
          <p className='text-[#AAAAAA] text-sm mb-8 max-w-sm leading-relaxed'>
            Create your free account and connect with verified doctors in minutes. Your health, simplified.
          </p>
          <button
            onClick={() => { navigate('/login'); scrollTo(0, 0) }}
            className='bg-[#6B8F6E] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#D6E8D4] hover:text-[#1E1E1E] transition-all duration-300'
          >
            Create Free Account →
          </button>
        </div>

        <div className='hidden md:flex md:w-[42%] lg:w-[380px] items-end self-end'>
          <img
            className='w-full object-cover rounded-br-3xl'
            src={assets.appointment_img}
            alt="Book Appointment"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner