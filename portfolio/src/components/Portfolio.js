import React from 'react'
import Resume from '../Assets/portfolio/Resume.png'
import navbar from '../Assets/portfolio/navbar.jpg'
import kanchi from '../Assets/portfolio/kanchi.png'
import SIF from '../Assets/portfolio/SIF.png'


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: Resume
        },
        {
            id: 2,
            src: navbar
        },
        {
            id: 3,
            src: kanchi
        
        },
       
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>This are my personal project that i have worked on :</p>
            </div>

        
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0'>
                 {
                portfolios.map(({id,src})=>(
                    <div className='shadow-md shadow-gray-600 rounded-lg '>
                    <a href='http://kan-chi.co/'><img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/></a>
                    <div className='flex items-center justify-center'>
                        
                    </div>
                </div>
                ))
            }
               
            </div>
        </div>
    </div>
  )
}

export default Portfolio