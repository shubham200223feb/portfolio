// import React from 'react'
// import backImg from '../assets/back.png'
// import profileImg from '../assets/image.png'
// import { easeInOut, motion } from "framer-motion"


// const Heros = () => {
//   return (
//     <div id='home' >
//       <motion.div className='relative container mx-auto px-6'>

//         <div className='absolute top-0 inset-0 z-0'>
//           {/* <motion.img whileHover={{y:[0,-10,0]}} transition={{duration:1, ease:"easeInOut", repeat:Infinity}} 
//             className='w-full h-[500px] object-cover opacity-40'
//             src={backImg}
//             alt="background"
//           /> */}
//           <motion.img 
//   whileHover={{ y: [0, -20, 0] }} 
//   transition={{ 
//     duration: 1.5, 
//     ease: "easeInOut", 
//     repeat: Infinity 
//   }} 
//   className='w-full h-[500px] object-cover opacity-40 cursor-pointer'
//   src={backImg}
//   alt="background"
// />
//         </div>

//         <div className='flex flex-col items-center justify-center relative z-10'>
//           <img
//             className='w-40 h-40 object-cover rounded-full mb-4'
//             src={profileImg}
//             alt="profile"
//           />

//           <div className='flex items-center'>
//             <span className='text-4xl md:text-5xl uppercase'>
//               Shubham Sharma
//             </span>
//             <div className='w-4 h-4 bg-teal-700 rounded-full ml-1'></div>
//           </div>
//           <spam className='text-xl  bg-gradient-to-r from-teal-700 to-pink-700 bg-clip-text text-transparent font-semibold mb-4' >Full Stack</spam>
//           <p className='w=full max-w-md text-center'>"Hii I am Full Stack developer, My expertise to develop web application .let 's create something amazing' </p>
//         <button className='relative mt-3 px-6 py-2 border border-teal-700 rounded-full cursor-pointer'>Contact me</button>
//         </div>

//       </motion.div>
//     </div>
//   )
// }

// export default Heros

import React from 'react'
import backImg from '../assets/back.png'
import profileImg from '../assets/image.png'
import { easeInOut, motion } from "framer-motion"
import { link } from 'framer-motion/client'

const Heros = () => {
  return (
    <div id='home' className='relative overflow-hidden bg-black text-white'>
      {/* 1. Background Image Layer */}
      <div className='absolute top-0 inset-0 z-0'>
        <img 
         
          className='w-full h-[600px] object-cover opacity-30'
          src={backImg}
          alt="background"
        />
      </div>

      {/* 2. Content Layer */}
      <div className='relative container mx-auto px-6 py-20 z-10'>
        <div className='flex flex-col items-center justify-center'>
          
          {/* Profile Image */}
          <motion.img
          
            whileHover={{scale:1.2 ,x:[0,0,0],y:[0,100,0], rotate:360}}
            whileTap={{scale:1.2 ,x:[0,0,0],y:[0,100,0], rotate:360}}
            transition={{ duration: 0.8, ease:easeInOut }}
            className='w-40 h-40 object-cover rounded-full mb-6 border-4 border-teal-700'
            src={profileImg}
            alt="profile"
          />

          {/* Name Section */}
          <div className='flex items-center mb-2'>
            <h1 className='text-4xl md:text-6xl uppercase font-bold tracking-tighter'>
              Shubham Sharma
            </h1>
            <div className='w-4 h-4 bg-teal-700 rounded-full ml-2 mt-2 shadow-[0_0_15px_rgba(15,118,110,0.8)]'></div>
          </div>

          {/* Title Section (Fixed Spelling: span) */}
          <span className='text-xl md:text-2xl bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent font-bold mb-6'>
            Full Stack Developer
          </span>

          {/* Description Section */}
          <p className='w-full max-w-lg text-center text-gray-400 text-lg leading-relaxed mb-8'>
            "Hi, I am a Full Stack developer. My expertise is to develop modern web applications. Let's create something amazing together!"
          </p>

          {/* Contact Button */}
          <a href='#contact'>
            <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-8 py-3 border-2 border-teal-700 rounded-full font-medium hover:bg-teal-700 transition-all duration-300 shadow-lg'
          >
            Contact me
          </motion.button>
          </a>
          

        </div>
      </div>
    </div>
  )
}

export default Heros