import React from 'react'

const AboutUs = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p  className='lg:text-xl mt-10'>
              Bachelor's engineering passout-2022 with excellent full stack 
              development skills. Have completed course & Certification in 
              <b> MERN- Full Stack Developer. </b>
              Strong in design and integration with intuitive problem-solving 
              skills. 
              Having excellent knowledge and expertise with ReactJS, 
              NodeJS, MongoDB, Express.js, HTML5, CSS, JavaScript, ES6.
            
            </p>

            <br></br>

            <p className='lg:text-xl'>
            I have done two personal projects by using full stack 
            development skills like <br/><br/>
             1. My profile (Resume) - Static Webpage <br/>
             2. Business Website - Freelancing Project <br/>
             3. Fully Responsive Webpage on Personal Portfolio <br/>
             4. Student information system<br/>
             5. User Authentication<br/><br/>
            Passionate about implementing and launching new projects. 
            Ability to translate business requirements into technical 
            solutions. 
            Looking to start the career as an entry-level software engineer 
            with a reputed firm driven by technology. Looking for 
            challenging career in UI development, Full stack Development 
            or ReactJS/NodeJS developer to grow and explore more.

            </p>
        </div>
    </div>
  )
}

export default AboutUs