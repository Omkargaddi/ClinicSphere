import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { doctors, changeAvailability, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) getAllDoctors()
  }, [aToken])

  return (
    <div className='m-6 font-["DM_Sans",sans-serif]'>
      <div className='mb-6 flex items-end justify-between'>
        <div>
          <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Admin Panel</span>
          <h1 className='font-["Playfair_Display",Georgia,serif] text-2xl md:text-3xl font-bold text-[#1E1E1E] mt-1'>All Doctors</h1>
        </div>
        <span className='text-sm text-[#7A7A7A] bg-[#F7F5F0] px-4 py-2 rounded-full border border-[#E5E0D8]'>
          {doctors.length} registered
        </span>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-[82vh] overflow-y-scroll pb-4'>
        {doctors.map((item, index) => (
          <div
            key={index}
            className='bg-white border border-[#E5E0D8] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group'
          >
            <div className='relative bg-[#EAF0EA] overflow-hidden'>
              <img
                className='w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500'
                src={item.image}
                alt={item.name}
              />
              <div className={`absolute top-2 right-2 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full shadow
                ${item.available ? 'bg-[#D6E8D4] text-[#4A6B4D]' : 'bg-[#F0EDE8] text-[#9A9A9A]'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${item.available ? 'bg-[#6B8F6E]' : 'bg-[#AAAAAA]'}`}></span>
                {item.available ? 'Active' : 'Off'}
              </div>
            </div>

            <div className='p-4'>
              <p className='text-sm font-semibold text-[#1E1E1E] leading-tight truncate'>{item.name}</p>
              <p className='text-xs text-[#7A7A7A] mt-0.5 truncate'>{item.speciality}</p>

              <div className='mt-3 flex items-center justify-between'>
                <span className='text-xs text-[#AAAAAA]'>Available</span>
                <label className='relative inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    checked={item.available}
                    onChange={() => changeAvailability(item._id)}
                    className='sr-only peer'
                  />
                  <div className='w-9 h-5 bg-[#E5E0D8] peer-checked:bg-[#6B8F6E] rounded-full transition-colors duration-300 after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:w-4 after:h-4 after:transition-transform after:duration-300 peer-checked:after:translate-x-4'></div>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {doctors.length === 0 && (
        <div className='text-center py-20 text-[#AAAAAA] text-sm'>No doctors registered yet.</div>
      )}
    </div>
  )
}

export default DoctorsList