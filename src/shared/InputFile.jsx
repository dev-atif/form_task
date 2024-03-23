import { MontFont } from '@/components/Personal_Information'
import React from 'react'

const InputFile = ({placeholder,value,name,onchange}) => {
  return (
    <div>
        <input type='text' value={value} name={name} onChange={onchange} className={` fw-light  rounded-5 border Input-Border-Color ps-3 pe-3 input_paddings custom-outline-none ${MontFont.className} text-secondary  w-100 `} placeholder={placeholder}/>
    </div>
  )
}

export default InputFile