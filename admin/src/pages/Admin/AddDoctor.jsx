import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const { backendUrl } = useContext(AppContext)
  const { aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (!docImg) return toast.error('Image Not Selected')
      const formData = new FormData()
      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })
      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName(''); setPassword(''); setEmail('')
        setAddress1(''); setAddress2(''); setDegree('')
        setAbout(''); setFees('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const inputClass = 'w-full border border-[#E5E0D8] bg-[#FAFAF8] rounded-xl px-4 py-2.5 text-sm text-[#1E1E1E] placeholder-[#AAAAAA] focus:outline-none focus:border-[#6B8F6E] focus:ring-1 focus:ring-[#6B8F6E] transition-all'
  const selectClass = 'w-full border border-[#E5E0D8] bg-[#FAFAF8] rounded-xl px-4 py-2.5 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#6B8F6E] focus:ring-1 focus:ring-[#6B8F6E] transition-all'
  const labelClass = 'text-xs font-semibold tracking-wide uppercase text-[#7A7A7A] mb-1 block'

  return (
    <form onSubmit={onSubmitHandler} className='m-6 w-full font-["DM_Sans",sans-serif]'>

      <div className='mb-6'>
        <span className='text-xs font-semibold tracking-widest uppercase text-[#6B8F6E]'>Admin Panel</span>
        <h1 className='font-["Playfair_Display",Georgia,serif] text-2xl md:text-3xl font-bold text-[#1E1E1E] mt-1'>Add New Doctor</h1>
      </div>

      <div className='bg-white border border-[#E5E0D8] rounded-2xl w-full max-w-4xl max-h-[82vh] overflow-y-scroll shadow-sm'>

        <div className='px-8 pt-8 pb-6 border-b border-[#E5E0D8]'>
          <label htmlFor='doc-img' className='cursor-pointer inline-flex items-center gap-5 group'>
            <div className='relative'>
              <div className='w-20 h-20 rounded-2xl bg-[#F7F5F0] border-2 border-dashed border-[#D6E8D4] overflow-hidden flex items-center justify-center group-hover:border-[#6B8F6E] transition-all'>
                {docImg
                  ? <img className='w-full h-full object-cover' src={URL.createObjectURL(docImg)} alt='' />
                  : <img className='w-8 opacity-40' src={assets.upload_area} alt='' />
                }
              </div>
              <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-[#6B8F6E] rounded-full flex items-center justify-center text-white text-xs font-bold shadow'>+</div>
            </div>
            <div>
              <p className='text-sm font-semibold text-[#1E1E1E]'>Upload Doctor Photo</p>
              <p className='text-xs text-[#AAAAAA] mt-0.5'>JPG, PNG up to 5MB</p>
            </div>
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type='file' id='doc-img' hidden />
        </div>

        <div className='px-8 py-6'>
          <div className='flex flex-col lg:flex-row gap-8'>

            <div className='flex-1 flex flex-col gap-5'>
              <div>
                <label className={labelClass}>Full Name</label>
                <input onChange={e => setName(e.target.value)} value={name} className={inputClass} type='text' placeholder='Dr. John Smith' required />
              </div>
              <div>
                <label className={labelClass}>Email Address</label>
                <input onChange={e => setEmail(e.target.value)} value={email} className={inputClass} type='email' placeholder='doctor@clinic.com' required />
              </div>
              <div>
                <label className={labelClass}>Password</label>
                <input onChange={e => setPassword(e.target.value)} value={password} className={inputClass} type='password' placeholder='Set a secure password' required />
              </div>
              <div>
                <label className={labelClass}>Experience</label>
                <select onChange={e => setExperience(e.target.value)} value={experience} className={selectClass}>
                  {['1 Year','2 Year','3 Year','4 Year','5 Year','6 Year','8 Year','9 Year','10 Year'].map(y => (
                    <option key={y} value={y}>{y}{y !== '1 Year' ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Consultation Fees ($)</label>
                <input onChange={e => setFees(e.target.value)} value={fees} className={inputClass} type='number' placeholder='e.g. 150' required />
              </div>
            </div>

            <div className='flex-1 flex flex-col gap-5'>
              <div>
                <label className={labelClass}>Speciality</label>
                <select onChange={e => setSpeciality(e.target.value)} value={speciality} className={selectClass}>
                  {['General physician','Gynecologist','Dermatologist','Pediatricians','Neurologist','Gastroenterologist'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Degree / Qualification</label>
                <input onChange={e => setDegree(e.target.value)} value={degree} className={inputClass} type='text' placeholder='e.g. MBBS, MD' required />
              </div>
              <div>
                <label className={labelClass}>Clinic Address</label>
                <div className='flex flex-col gap-2'>
                  <input onChange={e => setAddress1(e.target.value)} value={address1} className={inputClass} type='text' placeholder='Address line 1' required />
                  <input onChange={e => setAddress2(e.target.value)} value={address2} className={inputClass} type='text' placeholder='Address line 2' required />
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6'>
            <label className={labelClass}>About Doctor</label>
            <textarea
              onChange={e => setAbout(e.target.value)}
              value={about}
              className={`${inputClass} resize-none`}
              rows={4}
              placeholder='Brief bio about the doctors expertise, background, and approach to care...'
            />
          </div>

          <div className='flex items-center gap-4 mt-6'>
            <button
              type='submit'
              className='bg-[#1E1E1E] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#6B8F6E] transition-all duration-300'
            >
              Add Doctor
            </button>
            <button
              type='button'
              onClick={() => {
                setDocImg(false); setName(''); setEmail(''); setPassword('')
                setDegree(''); setAddress1(''); setAddress2(''); setAbout(''); setFees('')
              }}
              className='text-sm text-[#7A7A7A] hover:text-[#1E1E1E] border border-[#E5E0D8] px-6 py-3 rounded-full transition-all'
            >
              Clear Form
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddDoctor