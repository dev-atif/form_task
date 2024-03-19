import React from 'react'
import Background from '../../public/hero_section.jpg'
import Personal_Information from './Personal_Information'
const HeroSection = () => {

  return (
    
        <div
          
          style={{
            backgroundImage: `url(https://enterjamaica.com/images/content_bg1.jpg)`,
            backgroundSize: '100% !important',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            height:'1200px',
            width: '100%', // Adjust width as needed
           
          }}
        >
          <div className=' container-xl border   'style={{paddingTop:'19%'}} >
            <Personal_Information/>
          </div>
        </div>
  )
}

export default HeroSection