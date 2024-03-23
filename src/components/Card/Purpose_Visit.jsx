import React from 'react'
import { MontFont } from '../Personal_Information'
import InputFile from '@/shared/InputFile'
const purpose_of_visit_Data = [
    {
        label:'Visiting Friends / Relatives'
    },
    {
        label:'Vacation'
    },
    {
        label:'Business / Meeting'
    },
    {
        label:' Intransit'
    },
    {
        label:'Resident'
    },
    {
        label:'Work'
    },
    {
        label:'Honeymoon / Wedding'
    },

]
const Purpose_Visit = () => {
  return (
    <div>
        <div>
        <div>
        <h1 className={`fs-lg-5 fs-6 pb-3 fw-normal ${MontFont.className}`}>
         PURPOSE OF VISITS
        </h1>
      </div>
      {purpose_of_visit_Data.map((item,index)=>(
        <div key={index} className={`d-flex align-items-center gap-2 fs-6 fw-normal pb-3 text-secondary ${MontFont.className}`} >
        <input type='checkbox'/>
        <labe>{item.label}</labe>
      </div>
      ))}
        </div>
        {/* ------------------------------------------------------------------------ */}
        <div className='row mt-4'>
            <div className='col-lg-6'>
                <InputFile placeholder={'Other (Please)'}/>
            </div>
        </div>
        <div className='my-5'>
        <h1 className={`fs-lg-5 fs-6 pb-2 fw-normal ${MontFont.className}`}>
        Length of Stay
        </h1>
        <div className='row '>
        <div className='col-lg-6'>
                <InputFile placeholder={'Length of Stay (in Days)'}/>
            </div>
        </div>
        </div>
        {/* -------------------------------------------------------------- */}
        <div className='my-5'>
        <h1 className={`fs-lg-5 fs-6 pb-2 fw-normal ${MontFont.className}`}>
        NUMBER OF PIECES OF LUGGAGE
        </h1>
        <div className='row align-items-center '>
        <div className='col-lg-6'>
                <InputFile placeholder={'Accompained (11A)'}/>
            </div>
            <div className='col-lg-6 DayTime_Label text-secondary ps-lg-5 ps-3 mt-2 mt-lg-0 fw-light'>
                <span>checked luggage & hand luggage</span>
            </div>
        </div>
        
        </div>
        <div>
        <h1 className={`fs-lg-5 fs-6 pb-2 fw-normal ${MontFont.className}`}>
        NUMBER OF PACKAGES SHIPPED
        </h1>
        <div className='row align-items-center '>
        <div className='col-lg-6'>
                <InputFile placeholder={"Unaccompained (11A)"}/>
            </div>
            <div className='col-lg-6 DayTime_Label text-secondary ps-lg-5 ps-3 mt-2 mt-lg-0 fw-light'>
                <span>personal cargo sent by air or sea (barrel, box, etc.)</span>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Purpose_Visit