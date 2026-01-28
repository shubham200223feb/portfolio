import React from 'react'
import gmail from "../assets/gmail.png"
const Footer = () => {
  return (
    <div className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-start md:flex-row md:items-center md:justify-between px-12'>
          
          {/* Heading Section */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
            <span>Let's</span>
            <br />
            <span>Work Together</span>
          </h1>

          {/* Email Section */}
          <div className='flex items-center space-x-2 mt-8 md:mt-0'>
            <img 
              className='w-6 h-6 object-cover rounded-full' 
              src={gmail} 
              alt="Gmail Icon" 
            />
            <a className='text-lg cursor-pointer'>shubham2101861@gmail.com</a>
          </div>

        </div>
      </div>
    </div>
  )
};

export default Footer