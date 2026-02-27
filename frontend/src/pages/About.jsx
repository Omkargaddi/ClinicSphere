import React from 'react'
import { assets } from '../assets/assets'

const whyChooseUs = [
  {
    title: 'Efficiency',
    desc: 'Streamlined appointment scheduling that fits into your busy lifestyle, saving you time and effort.',
    icon: '⚡',
    color: '#E8DFD0',
  },
  {
    title: 'Convenience',
    desc: 'Access to a trusted network of healthcare professionals in your area, available at your fingertips.',
    icon: '📍',
    color: '#D6E8D4',
  },
  {
    title: 'Personalization',
    desc: 'Tailored recommendations and reminders to help you stay on top of your health journey.',
    icon: '✦',
    color: '#E0E4F0',
  },
]

const About = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 py-12 font-["DM_Sans",sans-serif]'>
      <div className='text-center mb-14'>
        <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Our Story</span>
        <h1 className='font-["Playfair_Display",Georgia,serif] text-3xl md:text-5xl font-bold text-[#1E1E1E] mt-2'>
          About <span className='italic text-[#6B8F6E]'>ClinicSphere</span>
        </h1>
      </div>
      <div className='flex flex-col md:flex-row gap-10 md:gap-16 items-center mb-20'>
        <div className='relative md:w-5/12 flex-shrink-0'>
          <div className='absolute inset-0 bg-[#D6E8D4] rounded-3xl translate-x-3 translate-y-3 z-0' />
          <img
            className='relative z-10 w-full rounded-3xl object-cover shadow-xl'
            src={assets.about_image}
            alt='About ClinicSphere'
          />
          <div className='absolute -bottom-4 -left-4 z-20 bg-[#1E1E1E] text-white rounded-2xl shadow-lg px-5 py-3'>
            <p className='text-xs text-[#6B8F6E] font-semibold tracking-widest uppercase'>Trusted by</p>
            <p className='text-xl font-bold mt-0.5'>10,000+ Patients</p>
          </div>
        </div>

        <div className='md:w-7/12 flex flex-col gap-6 text-[#5C5C5C] text-sm leading-7'>
          <p>
            Welcome to <span className='text-[#1E1E1E] font-semibold'>ClinicSphere</span> — your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            ClinicSphere is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, ClinicSphere is here to support you every step of the way.
          </p>

          <div className='bg-[#F7F5F0] border border-[#E5E0D8] rounded-2xl p-6'>
            <div className='flex items-center gap-2 mb-3'>
              <span className='w-6 h-6 rounded-full bg-[#D6E8D4] flex items-center justify-center text-xs text-[#6B8F6E] font-bold'>✦</span>
              <p className='text-[#1E1E1E] font-semibold text-base'>Our Vision</p>
            </div>
            <p className='text-[#7A7A7A] text-sm leading-7'>
              To create a seamless healthcare experience for every user — bridging the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      <div className='mb-4'>
        <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Our Promise</span>
        <h2 className='font-["Playfair_Display",Georgia,serif] text-2xl md:text-3xl font-bold text-[#1E1E1E] mt-1 mb-8'>
          Why Choose Us
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-20'>
        {whyChooseUs.map(({ title, desc, icon, color }) => (
          <div
            key={title}
            className='group bg-white border border-[#E5E0D8] rounded-2xl p-7 flex flex-col gap-4 hover:bg-[#1E1E1E] hover:border-[#1E1E1E] transition-all duration-400 cursor-pointer shadow-sm hover:shadow-xl'
          >
            <div
              className='w-12 h-12 rounded-xl flex items-center justify-center text-xl group-hover:bg-[#2E2E2E] transition-all'
              style={{ backgroundColor: color }}
            >
              {icon}
            </div>
            <div>
              <p className='text-[#1E1E1E] group-hover:text-white font-semibold text-base mb-2 tracking-wide uppercase text-xs'>{title}</p>
              <p className='text-[#7A7A7A] group-hover:text-[#AAAAAA] text-sm leading-6'>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About