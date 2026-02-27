import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className='py-16 px-6 md:px-16 lg:px-20 bg-[#F7F5F0] rounded-3xl mx-4'>
      <div className='flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4'>
        <div>
          <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Our Network</span>
          <h2 className='font-["Playfair_Display",Georgia,serif] text-3xl md:text-4xl text-[#1E1E1E] font-bold mt-1'>
            Top Doctors to Book
          </h2>
        </div>
        <button
          onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
          className='text-sm text-[#6B8F6E] border border-[#6B8F6E] px-6 py-2.5 rounded-full hover:bg-[#6B8F6E] hover:text-white transition-all duration-300 w-fit'
        >
          View All Doctors →
        </button>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
            className='group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2'
          >
            <div className='bg-[#EAF0EA] overflow-hidden'>
              <img
                className='w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500'
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className='p-4'>
              <div className={`flex items-center gap-1.5 text-xs mb-2 ${item.available ? 'text-[#6B8F6E]' : 'text-gray-400'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${item.available ? 'bg-[#6B8F6E]' : 'bg-gray-400'}`} />
                {item.available ? 'Available' : 'Unavailable'}
              </div>
              <p className='text-[#1E1E1E] font-semibold text-sm leading-tight'>{item.name}</p>
              <p className='text-[#7A7A7A] text-xs mt-1'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopDoctors