import React from 'react';
import { motion } from 'framer-motion';

// Resume data based array


const Projects = () => {
    const projects = [
  {
    projectName: "CargoConnect - Truck Booking Platform",
    tech: "Node.js | Express | Sequelize | MySQL",
    detail:
      "Developed a truck booking system with backend logic to add trucks, book trucks, and update availability. Implemented RESTful APIs for dynamic listing.",
    github: "https://github.com/shubham200223feb/CargoConnect-Truck-Booking-Platform-Truckwale-"
  },
  {
    projectName: "QuickChat - Real-time Messaging App",
    tech: "Node.js | Socket.io | MongoDB | Express",
    detail:
      "Built a real-time chat application using WebSockets for instant communication. Supported one-to-one and group chat rooms with message persistence.",
    github: "https://github.com/shubham200223feb/chatapplication"
  },
  {
    projectName: "SmartPersonalExpense - Personal Finance Tracker",
    tech: "Node.js | Sequelize | Razorpay | JWT",
    detail:
      "Built a secure expense tracking platform with JWT-based authentication. Integrated Razorpay for premium membership simulation and personalized analytics.",
    github: "https://github.com/shubham200223feb/Personal-Finance-Tracker"
  }
];

  return (
    <div id='projects' className='py-20 bg-black text-white'>
      <div className='container mx-auto px-6'>
        
        {/* Header Section (Matching your style) */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-4xl font-semibold mb-4'>My Projects</h1>
          <span className='text-sm bg-gradient-to-r from-teal-700 to-pink-700 bg-clip-text text-transparent font-semibold uppercase'>
            Showcasing my work
          </span>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }} 
              whileTap={{ y: -10 }}
              className='bg-[#1a1a1a] rounded-2xl border border-gray-800 p-6 flex flex-col hover:border-teal-500 transition-all duration-300 shadow-xl'
            >
              {/* Project Title */}
              <h3 className='text-xl font-bold mb-2 text-white'>{project.projectName}</h3>
              
              {/* Tech Stack Badge */}
              <span className='text-xs font-mono text-teal-500 mb-4 block uppercase tracking-wider'>
                {project.tech}
              </span>

              {/* Project Detail */}
              <p className='text-gray-400 text-sm leading-relaxed mb-6 flex-grow'>
                {project.detail}
              </p>

              {/* GitHub Link Button */}
              <div className='mt-auto'>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-teal-700 to-pink-700 bg-clip-text text-transparent hover:scale-105 transition-transform'
                >
                  View on GitHub <span className='text-pink-700'>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;