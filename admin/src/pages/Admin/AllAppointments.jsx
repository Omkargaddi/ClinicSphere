import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointments = () => {
  const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) getAllAppointments()
  }, [aToken])

  const StatusBadge = ({ item }) => {
    if (item.cancelled) return (
      <span className='inline-flex items-center gap-1.5 text-xs font-medium text-red-500 bg-red-50 px-3 py-1 rounded-full'>
        <span className='w-1.5 h-1.5 rounded-full bg-red-400'></span>Cancelled
      </span>
    )
    if (item.isCompleted) return (
      <span className='inline-flex items-center gap-1.5 text-xs font-medium text-[#6B8F6E] bg-[#D6E8D4] px-3 py-1 rounded-full'>
        <span className='w-1.5 h-1.5 rounded-full bg-[#6B8F6E]'></span>Completed
      </span>
    )
    return (
      <button
        onClick={() => cancelAppointment(item._id)}
        className='inline-flex items-center gap-1 text-xs font-medium text-[#7A7A7A] border border-[#E5E0D8] px-3 py-1.5 rounded-full hover:border-red-300 hover:text-red-500 hover:bg-red-50 transition-all'
      >
        <img className='w-3' src={assets.cancel_icon} alt='' />
        Cancel
      </button>
    )
  }

  return (
    <div className='m-6 w-full font-["DM_Sans",sans-serif]'>

      <div className='mb-6 flex items-end justify-between'>
        <div>
          <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Admin Panel</span>
          <h1 className='font-["Playfair_Display",Georgia,serif] text-2xl md:text-3xl font-bold text-[#1E1E1E] mt-1'>All Appointments</h1>
        </div>
        <span className='text-sm text-[#7A7A7A] bg-[#F7F5F0] px-4 py-2 rounded-full border border-[#E5E0D8]'>
          {appointments.length} total
        </span>
      </div>

   
      <div className='bg-white border border-[#E5E0D8] rounded-2xl overflow-hidden shadow-sm max-h-[80vh] overflow-y-scroll'>
   
        <div className='hidden sm:grid grid-cols-[0.4fr_2.5fr_0.8fr_2fr_2.5fr_0.8fr_1.2fr] px-6 py-4 bg-[#F7F5F0] border-b border-[#E5E0D8]'>
          {['#', 'Patient', 'Age', 'Date & Time', 'Doctor', 'Fees', 'Status'].map(h => (
            <p key={h} className='text-xs font-semibold tracking-wide uppercase text-[#7A7A7A]'>{h}</p>
          ))}
        </div>

        {appointments.map((item, index) => (
          <div
            key={index}
            className='flex flex-wrap sm:grid sm:grid-cols-[0.4fr_2.5fr_0.8fr_2fr_2.5fr_0.8fr_1.2fr] items-center px-6 py-4 border-b border-[#F0EDE8] hover:bg-[#FAFAF8] transition-colors gap-2'
          >
            <p className='text-sm text-[#AAAAAA] max-sm:hidden'>{index + 1}</p>

            <div className='flex items-center gap-3'>
              <img src={item.userData.image} className='w-9 h-9 rounded-xl object-cover border border-[#E5E0D8]' alt='' />
              <p className='text-sm font-medium text-[#1E1E1E]'>{item.userData.name}</p>
            </div>

            <p className='text-sm text-[#7A7A7A] max-sm:hidden'>{calculateAge(item.userData.dob)}y</p>

            <div>
              <p className='text-sm text-[#1E1E1E] font-medium'>{slotDateFormat(item.slotDate)}</p>
              <p className='text-xs text-[#AAAAAA]'>{item.slotTime}</p>
            </div>

            <div className='flex items-center gap-3'>
              <img src={item.docData.image} className='w-9 h-9 rounded-xl object-cover bg-[#EAF0EA] border border-[#E5E0D8]' alt='' />
              <p className='text-sm font-medium text-[#1E1E1E]'>{item.docData.name}</p>
            </div>

            <p className='text-sm font-semibold text-[#1E1E1E]'>{currency}{item.amount}</p>

            <StatusBadge item={item} />
          </div>
        ))}

        {appointments.length === 0 && (
          <div className='py-20 text-center text-[#AAAAAA] text-sm'>No appointments found.</div>
        )}
      </div>
    </div>
  )
}

export default AllAppointments