import React from 'react'
import resume from "../assets/resume.pdf";
const about = () => {
  return (
    <div id='about' className='py-20 mt-10'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-4'>
                <h1 className='text-3xl md:text-4xl font-semibold mb-6'>About me</h1>
                <span className='text-sm bg-gradient-to-r from-teal-700 to-pink-700 bg-clip-text text-transparent font-semibold'>
  Get to me
</span>

            </div>
<div className='w-full max-w-2xl mx-auto text-center'>
    
    <p className='mb-4'>"Hi, I'm a passionate Full Stack Developer with a strong focus on building modern, scalable, and user-friendly web applications. With expertise in both front-end and back-end technologies, I specialize in creating full-fledged digital solutions — from interactive user interfaces to robust server-side logic and database management."</p>
    <p className='mb-4'>"My tech stack includes JavaScript, React, Node.js, Express, and MongoDB, along with tools like Git, REST APIs, and cloud deployment platforms such as Vercel and AWS. I love turning ideas into functional products, solving complex problems with clean code, and continuously learning new technologies to stay ahead in the fast-paced world of web development."</p>
    <p className='mb-6'>"Whether you need a sleek portfolio website, a complex business dashboard, or a fully functional e-commerce platform, I'm here to bring your vision to life with clean design and efficient development."</p>
    <a href={resume} download="shubham_resume.pdf"><button className='px-6 py-2 border border-teal-700 rounded-full cursor-pointer'>Download-Resume</button>
</a>
</div>
        </div>
 
    </div>
  )
}

export default about
