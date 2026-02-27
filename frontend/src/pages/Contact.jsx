import React from 'react'
import { assets } from '../assets/assets'

const contactDetails = [
  { icon: '📍', label: 'Address', value: '54709 Willms Station\nSuite 350, Washington, USA' },
  { icon: '📞', label: 'Phone', value: '(415) 555-0132' },
  { icon: '✉️', label: 'Email', value: 'clinicsphere@gmail.com' },
]

const Contact = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 py-12 font-["DM_Sans",sans-serif]'>
      <div className='text-center mb-14'>
        <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Reach Out</span>
        <h1 className='font-["Playfair_Display",Georgia,serif] text-3xl md:text-5xl font-bold text-[#1E1E1E] mt-2'>
          Contact <span className='italic text-[#6B8F6E]'>Us</span>
        </h1>
        <p className='text-[#7A7A7A] text-sm mt-3 max-w-md mx-auto'>
          Have questions or need support? We're here to help you navigate your healthcare journey.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-20'>

        <div className='relative md:w-5/12 flex-shrink-0'>
          <div className='absolute inset-0 bg-[#E8DFD0] rounded-3xl -translate-x-3 translate-y-3 z-0' />
          <img
            className='relative z-10 w-full rounded-3xl object-cover shadow-xl'
            src={assets.contact_image}
            alt='Contact ClinicSphere'
          />
        </div>

        <div className='md:w-7/12 flex flex-col gap-8'>
          <div>
            <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Our Office</span>
            <h2 className='font-["Playfair_Display",Georgia,serif] text-xl font-bold text-[#1E1E1E] mt-1 mb-5'>Get in Touch</h2>

            <div className='flex flex-col gap-4'>
              {contactDetails.map(({ icon, label, value }) => (
                <div
                  key={label}
                  className='flex items-start gap-4 bg-[#F7F5F0] border border-[#E5E0D8] rounded-2xl px-5 py-4'
                >
                  <div className='w-10 h-10 rounded-xl bg-[#D6E8D4] flex items-center justify-center text-base flex-shrink-0'>
                    {icon}
                  </div>
                  <div>
                    <p className='text-xs font-semibold uppercase tracking-wide text-[#AAAAAA]'>{label}</p>
                    <p className='text-sm text-[#1E1E1E] mt-0.5 whitespace-pre-line leading-6'>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='border-t border-[#E5E0D8]' />
          <div className='bg-[#1E1E1E] rounded-2xl p-7 relative overflow-hidden'>
            <div className='absolute top-[-30px] right-[-30px] w-32 h-32 rounded-full bg-[#6B8F6E] opacity-20 blur-2xl pointer-events-none' />
            <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Join Us</span>
            <h3 className='font-["Playfair_Display",Georgia,serif] text-xl font-bold text-white mt-1 mb-2'>
              Careers at ClinicSphere
            </h3>
            <p className='text-[#AAAAAA] text-sm leading-6 mb-5 max-w-sm'>
              We're building the future of healthcare technology. Learn more about our teams and open positions.
            </p>
            <button className='bg-[#6B8F6E] text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-[#D6E8D4] hover:text-[#1E1E1E] transition-all duration-300'>
              Explore Jobs →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact