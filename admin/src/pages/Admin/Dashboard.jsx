import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) getDashData()
  }, [aToken])

  const stats = dashData ? [
    { icon: assets.doctor_icon, label: 'Total Doctors', value: dashData.doctors, color: '#D6E8D4', accent: '#6B8F6E' },
    { icon: assets.appointments_icon, label: 'Appointments', value: dashData.appointments, color: '#E8DFD0', accent: '#B8895A' },
    { icon: assets.patients_icon, label: 'Patients', value: dashData.patients, color: '#E0E4F0', accent: '#5A6BB8' },
  ] : []

  return dashData && (
    <div className='m-6 font-["DM_Sans",sans-serif]'>
 
      <div className='mb-8'>
        <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Overview</span>
        <h1 className='font-["Playfair_Display",Georgia,serif] text-2xl md:text-3xl font-bold text-[#1E1E1E] mt-1'>Dashboard</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10'>
        {stats.map(({ icon, label, value, color, accent }) => (
          <div
            key={label}
            className='bg-white border border-[#E5E0D8] rounded-2xl p-5 flex items-center gap-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'
          >
            <div className='w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0' style={{ backgroundColor: color }}>
              <img className='w-7' src={icon} alt='' />
            </div>
            <div>
              <p className='text-2xl font-bold text-[#1E1E1E]'>{value}</p>
              <p className='text-xs font-medium text-[#7A7A7A] uppercase tracking-wide mt-0.5'>{label}</p>
            </div>
            <div className='ml-auto w-1 h-10 rounded-full' style={{ backgroundColor: accent }} />
          </div>
        ))}
      </div>
      <div className='bg-white border border-[#E5E0D8] rounded-2xl shadow-sm overflow-hidden'>
        <div className='flex items-center justify-between px-6 py-5 border-b border-[#E5E0D8]'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-[#D6E8D4] rounded-lg flex items-center justify-center'>
              <img src={assets.list_icon} className='w-4' alt='' />
            </div>
            <p className='font-semibold text-[#1E1E1E]'>Latest Bookings</p>
          </div>
          <span className='text-xs text-[#7A7A7A] bg-[#F7F5F0] px-3 py-1 rounded-full border border-[#E5E0D8]'>Recent 5</span>
        </div>

        <div className='divide-y divide-[#F0EDE8]'>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className='flex items-center gap-4 px-6 py-4 hover:bg-[#FAFAF8] transition-colors'
            >
              <img
                className='w-11 h-11 rounded-xl object-cover border border-[#E5E0D8] flex-shrink-0'
                src={item.docData.image}
                alt=''
              />
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-semibold text-[#1E1E1E] truncate'>{item.docData.name}</p>
                <p className='text-xs text-[#AAAAAA] mt-0.5'>
                  Booking on <span className='text-[#6B8F6E] font-medium'>{slotDateFormat(item.slotDate)}</span>
                </p>
              </div>

              {item.cancelled ? (
                <span className='inline-flex items-center gap-1.5 text-xs font-medium text-red-500 bg-red-50 px-3 py-1 rounded-full'>
                  <span className='w-1.5 h-1.5 rounded-full bg-red-400'></span>Cancelled
                </span>
              ) : item.isCompleted ? (
                <span className='inline-flex items-center gap-1.5 text-xs font-medium text-[#6B8F6E] bg-[#D6E8D4] px-3 py-1 rounded-full'>
                  <span className='w-1.5 h-1.5 rounded-full bg-[#6B8F6E]'></span>Completed
                </span>
              ) : (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className='text-xs font-medium text-[#7A7A7A] border border-[#E5E0D8] px-3 py-1.5 rounded-full hover:border-red-300 hover:text-red-500 hover:bg-red-50 transition-all flex items-center gap-1'
                >
                  <img className='w-3' src={assets.cancel_icon} alt='' />
                  Cancel
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard