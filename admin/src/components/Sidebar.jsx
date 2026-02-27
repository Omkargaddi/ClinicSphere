import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {
  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)
  
  const [isOpen, setIsOpen] = useState(false)
   const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  const adminLinks = [
    { to: '/admin-dashboard', icon: assets.home_icon, label: 'Dashboard' },
    { to: '/all-appointments', icon: assets.appointment_icon, label: 'Appointments' },
    { to: '/add-doctor', icon: assets.add_icon, label: 'Add Doctor' },
    { to: '/doctor-list', icon: assets.people_icon, label: 'Doctors List' },
  ]

  const doctorLinks = [
    { to: '/doctor-dashboard', icon: assets.home_icon, label: 'Dashboard' },
    { to: '/doctor-appointments', icon: assets.appointment_icon, label: 'Appointments' },
    { to: '/doctor-profile', icon: assets.people_icon, label: 'Profile' },
  ]

  const links = aToken ? adminLinks : dToken ? doctorLinks : []
  const role = aToken ? 'Admin Panel' : 'Doctor Panel'

  return (
    <>
      {!isOpen && (
      <button
        className="md:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-lg shadow"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>
      )}
     {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
<div
        className={`
          fixed md:static top-0 left-0 z-40
          h-screen 
          w-[260px] md:w-[280px]
          bg-[#F7F5F0]
          border-r border-[#E5E0D8]
          flex flex-col
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="flex md:hidden justify-end p-4">
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className='hidden md:flex items-center gap-2 px-6 py-5 border-b border-[#E5E0D8]'>
          <span className='w-2 h-2 rounded-full bg-[#6B8F6E]'></span>
          <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>
            {role}
          </span>
        </div>

        <ul className='mt-4 flex flex-col gap-1 px-2'>
          {links.map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-3 md:px-5 rounded-xl cursor-pointer transition-all duration-200 group
                ${isActive
                  ? 'bg-[#1E1E1E] text-white shadow-md'
                  : 'text-[#5C5C5C] hover:bg-[#E8DFD0] hover:text-[#1E1E1E]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all
                    ${isActive ? 'bg-[#6B8F6E]' : 'bg-white group-hover:bg-[#D6E8D4]'}`}
                  >
                    <img
                      className={`w-4 ${isActive ? 'invert' : ''}`}
                      src={icon}
                      alt=''
                    />
                  </div>

                  <p className='text-sm font-medium'>{label}</p>

                  {isActive && (
                    <span className='ml-auto w-1.5 h-1.5 rounded-full bg-[#6B8F6E]'></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </ul>
<div className='mt-auto px-4 pb-6 md:hidden'>
  <button
    onClick={() => {
      logout()
      setIsOpen(false)
    }}
    className='w-full bg-[#6B8F6E] text-white text-sm py-3 rounded-xl font-medium'
  >
    Logout
  </button>
</div>
        <div className='hidden md:block mt-auto px-6 py-8'>
          <div className='bg-[#D6E8D4] rounded-2xl p-4 text-center'>
            <p className='text-xs text-[#4A6B4D] font-medium leading-relaxed'>
              Need help? Check the <span className='underline cursor-pointer'>docs</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar