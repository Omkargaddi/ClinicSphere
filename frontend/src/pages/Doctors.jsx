import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const specialities = [
  'General physician',
  'Gynecologist',
  'Dermatologist',
  'Pediatricians',
  'Neurologist',
  'Gastroenterologist',
]

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  const handleSpecialityClick = (spec) => {
    if (speciality === spec) {
      navigate('/doctors')
    } else {
      navigate(`/doctors/${spec}`)
    }
    scrollTo(0, 0)
  }

  return (
    <div className='px-4 md:px-8 lg:px-16 py-10 font-["DM_Sans",sans-serif]'>

      <div className='mb-8'>
        <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Find a Specialist</span>
        <h1 className='font-["Playfair_Display",Georgia,serif] text-3xl md:text-4xl font-bold text-[#1E1E1E] mt-1'>
          Browse Doctors
        </h1>
        <p className='text-[#7A7A7A] text-sm mt-2 max-w-md'>
          Filter by speciality and book your appointment with a trusted professional.
        </p>
      </div>

      <button
        onClick={() => setShowFilter(!showFilter)}
        className={`sm:hidden mb-4 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all
          ${showFilter ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]' : 'bg-white text-[#1E1E1E] border-[#E5E0D8]'}`}
      >
        <span>{showFilter ? '✕ Hide' : '⊞ Show'} Filters</span>
      </button>

      <div className='flex flex-col sm:flex-row gap-6'>

        <div className={`flex-col gap-2 ${showFilter ? 'flex' : 'hidden sm:flex'} sm:min-w-[180px]`}>
          <p className='text-xs font-semibold tracking-widest uppercase text-[#AAAAAA] mb-2 hidden sm:block'>Speciality</p>
          <p
            onClick={() => navigate('/doctors')}
            className={`pl-4 py-2.5 pr-10 rounded-xl text-sm cursor-pointer transition-all border font-medium
              ${!speciality
                ? 'bg-[#1E1E1E] text-white border-[#1E1E1E] shadow-sm'
                : 'border-[#E5E0D8] text-[#5C5C5C] hover:bg-[#F7F5F0] hover:border-[#D6E8D4]'
              }`}
          >
            All Doctors
          </p>

          {specialities.map((spec) => (
            <p
              key={spec}
              onClick={() => handleSpecialityClick(spec)}
              className={`pl-4 py-2.5 pr-6 rounded-xl text-sm cursor-pointer transition-all border
                ${speciality === spec
                  ? 'bg-[#D6E8D4] text-[#2A5C2E] border-[#6B8F6E] font-semibold'
                  : 'border-[#E5E0D8] text-[#5C5C5C] hover:bg-[#F7F5F0] hover:border-[#D6E8D4]'
                } w-full sm:w-auto`}
            >
              {spec}
            </p>
          ))}
        </div>

        <div className='flex-1'>
          <div className='flex items-center justify-between mb-4'>
            <span className='text-xs text-[#AAAAAA]'>
              {filterDoc.length} doctor{filterDoc.length !== 1 ? 's' : ''} found
              {speciality ? ` · ${speciality}` : ''}
            </span>
          </div>

          {filterDoc.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-24 text-[#AAAAAA]'>
              <p className='text-4xl mb-3'>🩺</p>
              <p className='text-sm'>No doctors found for this speciality.</p>
            </div>
          ) : (
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {filterDoc.map((item, index) => (
                <div
                  key={index}
                  onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                  className='bg-white border border-[#E5E0D8] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-400 group'
                >
                  <div className='bg-[#EAF0EA] overflow-hidden'>
                    <img
                      className='w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500'
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className='p-4'>
                    <div className={`flex items-center gap-1.5 text-xs mb-2 font-medium ${item.available ? 'text-[#6B8F6E]' : 'text-[#AAAAAA]'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.available ? 'bg-[#6B8F6E]' : 'bg-[#AAAAAA]'}`} />
                      {item.available ? 'Available' : 'Not Available'}
                    </div>
                    <p className='text-[#1E1E1E] font-semibold text-sm leading-tight'>{item.name}</p>
                    <p className='text-[#7A7A7A] text-xs mt-1'>{item.speciality}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Doctors