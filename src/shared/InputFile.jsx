import { MontFont } from '@/components/Personal_Information'
import React from 'react'

const InputFile = ({placeholder}) => {
  return (
    <div>
        <input type='text' className={` fw-light  rounded-5 border border-dark-subtle p-3 py-2 custom-outline-none ${MontFont.className} text-secondary pl-4 w-100 outline-0`} placeholder={placeholder}/>
    </div>
  )
}

export default InputFile