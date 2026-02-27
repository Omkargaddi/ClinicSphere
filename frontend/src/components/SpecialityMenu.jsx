import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='py-20 px-6 md:px-16 lg:px-20'>
      <div className='flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4'>
        <div>
          <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Browse by Category</span>
          <h2 className='font-["Playfair_Display",Georgia,serif] text-3xl md:text-4xl text-[#1E1E1E] font-bold mt-1'>
            Find by Speciality
          </h2>
        </div>
        <p className='text-[#7A7A7A] text-sm max-w-xs leading-relaxed'>
          Browse our extensive list of trusted doctors and schedule your appointment hassle-free.
        </p>
      </div>

      <div className='flex gap-5 overflow-x-scroll pb-4 scrollbar-hide'>
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            key={index}
            className='group flex flex-col items-center gap-3 flex-shrink-0 cursor-pointer'
          >
            <div className='w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-[#F7F5F0] flex items-center justify-center group-hover:bg-[#D6E8D4] transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-2'>
              <img className='w-12 sm:w-16' src={item.image} alt={item.speciality} />
            </div>
            <p className='text-xs text-[#4A4A4A] font-medium text-center'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu