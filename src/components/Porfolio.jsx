import React from 'react'
import crypto from '../assets/portfolio/crypto.png';
import installNode from '../assets/portfolio/installNode.jpg';
import carousel from '../assets/portfolio/carousel.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import todoList from '../assets/portfolio/todoList.png';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
const Porfolio = () => {
    const portfolios =[
        {
            id:1,
            src: crypto,
            link: 'https://cryptobase-d1e9d.web.app/',
        },
        {
            id:2,
            src: reactParallax,
            link: 'https://main--calm-snickerdoodle-196f58.netlify.app/',
        },
        {
            id:3,
            src: carousel,
            link: 'https://classy-cajeta-2dc103.netlify.app/',
        },
        {
            id:4,
            src: todoList,
            link: 'https://cryptobase-d1e9d.web.app/',
        },
        {
            id:5,
            src: installNode,
            link: 'https://cryptobase-d1e9d.web.app/',
        },
        {
            id:6,
            src: reactWeather,
            link: 'https://cryptobase-d1e9d.web.app/',
        },
    ]
  return (
    <div name="porfolio" className='bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Porfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

          


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0'>
                  {
                portfolios.map(({id,src,link}) =>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" 
                    className='rounded-md duration-200 hover:scale-105 h-[174px] w-full' />
                    <div className='flex items-center justify-center'>
                        <a href={link}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                ))
            }
                
            </div>
            
        </div>
    </div>
  )
}

export default Porfolio