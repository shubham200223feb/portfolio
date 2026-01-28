import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id='contact' className='py-20 bg-black text-white'>
      <div className='container mx-auto px-6'>
        
        {/* Header Section - Same as your 'What i Do?' style */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-4xl font-semibold mb-4'>Contact Me</h1>
          <span className='text-sm bg-gradient-to-r from-teal-700 to-pink-700 bg-clip-text text-transparent font-semibold uppercase tracking-wider'>
            Get in touch
          </span>
        </div>

        {/* Form Container */}
        <div className='w-full max-w-2xl mx-auto bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 shadow-xl'>
          <form className='flex flex-col gap-6'>
            
            {/* Name Input */}
            <div className='flex flex-col gap-2'>
              <label className='block text-gray-400 text-sm font-medium'>Your Name</label>
              <input 
                type="text" 
                placeholder="Enter Your Name"
                className='w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-teal-500 transition-all placeholder:text-gray-500'
              />
            </div>

            {/* Subject Input */}
            <div className='flex flex-col gap-2'>
              <label className='block text-gray-400 text-sm font-medium'>Subject</label>
              <input 
                type="text" 
                placeholder="What is this about?"
                className='w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-teal-500 transition-all placeholder:text-gray-500'
              />
            </div>

            {/* Message Textarea */}
            <div className='flex flex-col gap-2'>
              <label className='block text-gray-400 text-sm font-medium mb-2'>Your Message</label>
              <textarea 
                rows="5"
                placeholder="Enter Your Message"
                className='w-full bg-transparent border border-gray-700 rounded-lg px-6 py-4 text-sm outline-none focus:border-teal-500 transition-all placeholder:text-gray-500 placeholder:text-xs resize-none h-40'
              />
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='w-full mt-4 py-3 bg-gradient-to-r from-teal-700 to-pink-700 rounded-lg font-bold text-white shadow-lg hover:shadow-teal-900/20 transition-all'
            >
              Send Message
            </motion.button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;