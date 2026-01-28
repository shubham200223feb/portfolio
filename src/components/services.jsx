import React from 'react'

// Sabse pehle images ko import karein
import fullstackImg from "../assets/fullstack.png"
import databaseImg from "../assets/database.png"
import cloudImg from "../assets/cloud.png"
import backendImg from "../assets/backend.png"
import reactImg from "../assets/react.png"
import webappImg from "../assets/webapp.png"
import{easeInOut, motion}from "framer-motion"

const Services = () => {
  const servicesData = [
    {
      imageUrl: fullstackImg, 
      heading: "Full-Stack Web Solutions",
      description: "End-to-end development services – from designing UI/UX to deploying complete web applications. Skilled in MERN stack (MongoDB, Express, React, Node.js) to deliver high-performance and scalable solutions."
    },
    {
      imageUrl: databaseImg,
      heading: "Database Design & Management",
      description: "Efficient data modeling and management using MongoDB, MySQL, or PostgreSQL. Focus on data integrity, scalability, and optimization for high-performing applications."
    },
    {
      imageUrl: cloudImg,
      heading: "Deployment & Maintenance",
      description: "Deployment of web applications using platforms like Vercel, Netlify, or cloud services like AWS. I also offer continuous maintenance, bug fixing, and updates for long-term project stability."
    },
    {
      imageUrl: backendImg,
      heading: "Back-End Development & API Integration",
      description: "Robust and secure server-side logic development using Node.js, Express, and RESTful APIs. Includes database design, authentication, and integration with third-party services."
    },
    {
      imageUrl: reactImg,
      heading: "Front-End Development",
      description: "Pixel-perfect, responsive user interfaces using HTML, CSS, JavaScript, and frameworks like React or Vue.js. I focus on performance, accessibility, and user experience for seamless interaction."
    },
    {
      imageUrl: webappImg,
      heading: "Web Application Development",
      description: "Tailor-made web applications built using modern front-end and back-end technologies like React, Node.js, Express, and MongoDB. From idea to deployment."
    }
  ];

  return (
    <div id="service" className='py-20 bg-black text-white'>
      <div className='container mx-auto px-6'>
        
        <div className='text-center mb-6'>
          <h1 className='text-3xl md:text-4xl font-semibold mb-4'>What i Do?</h1>
          <span className='text-sm bg-gradient-to-r from-teal-700 to-pink-700 bg-clip-text text-transparent font-semibold'>
            My Awesome services
          </span>
        </div>

        <div className='w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {servicesData.map((service, index) => (
            <motion.div 
            whileHover={{scale:1.2}}
            whileTap={{scale:1.2}}
            transition={{duration:1, ease:easeInOut}}
              key={index} 
              className='bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-teal-500 transition-all duration-300 flex flex-col items-start'
            >
              <img 
                src={service.imageUrl} // Sahi property name use karein
                alt={service.heading} 
                className='w-16 h-16 mb-6 object-contain'
              />
              
              <h3 className='text-xl font-bold mb-4 leading-tight'>
                {service.heading} {/* Yahan title ki jagah heading hoga */}
              </h3>
              
              <p className='text-gray-400 text-sm mb-6 leading-relaxed'>
                {service.description}
              </p>
              
            
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services