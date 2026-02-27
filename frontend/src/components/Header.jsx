import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='relative overflow-hidden bg-[#F7F5F0] rounded-3xl mx-4 mt-4 px-8 md:px-16 lg:px-20 py-12 md:py-0'>
      <div className='absolute top-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#D6E8D4] opacity-50 blur-3xl pointer-events-none' />
      <div className='absolute bottom-[-40px] left-[30%] w-[200px] h-[200px] rounded-full bg-[#E8DFD0] opacity-60 blur-2xl pointer-events-none' />

      <div className='flex flex-col md:flex-row items-center gap-10 md:gap-0'>
        <div className='md:w-1/2 flex flex-col gap-6 md:py-20 z-10'>
          <span className='inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#6B8F6E] bg-[#D6E8D4] px-4 py-2 rounded-full w-fit'>
            <span className='w-1.5 h-1.5 rounded-full bg-[#6B8F6E] inline-block'></span>
            Trusted Healthcare Platform
          </span>

          <h1 className='font-["Playfair_Display",Georgia,serif] text-4xl md:text-5xl lg:text-6xl text-[#1E1E1E] leading-[1.15] font-bold'>
            Book Your <br />
            <span className='text-[#6B8F6E] italic'>Appointment</span> <br />
            With Ease
          </h1>

          <div className='flex items-center gap-4'>
            <img className='w-24 rounded-full border-2 border-white shadow-md' src={assets.group_profiles} alt="Patients" />
            <p className='text-[#5C5C5C] text-sm leading-relaxed max-w-[220px]'>
              Join thousands who trust our network of verified specialists.
            </p>
          </div>

          <a
            href='#speciality'
            className='flex items-center gap-3 bg-[#1E1E1E] text-white px-7 py-3.5 rounded-full text-sm font-medium w-fit hover:bg-[#6B8F6E] transition-all duration-300 group'
          >
            Explore Doctors
            <img className='w-3 invert group-hover:translate-x-1 transition-transform duration-300' src={assets.arrow_icon} alt="" />
          </a>
        </div>

        <div className='md:w-1/2 flex justify-center md:justify-end relative z-10'>
          <div className='relative'>
            <div className='absolute inset-0 bg-[#D6E8D4] rounded-3xl translate-x-3 translate-y-3 z-0' />
            <img
              className='relative z-10 w-full max-w-[420px] rounded-3xl object-cover shadow-xl'
              src={assets.doc1}
              alt="Doctor"
            />
            <div className='absolute bottom-6 left-[-20px] z-20 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-[#D6E8D4] flex items-center justify-center text-[#6B8F6E] font-bold text-lg'>✓</div>
              <div>
                <p className='text-xs text-gray-400 font-medium'>Available Now</p>
                <p className='text-sm font-semibold text-[#1E1E1E]'>100+ Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header