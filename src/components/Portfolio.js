import React from 'react'
import project_1 from '../assets/img/web1.png'
import project_2 from '../assets/img/web2.png'
import project_3 from '../assets/img/web3.png'
import project_4 from '../assets/img/web4.png'
import project_5 from '../assets/img/web5.png'
import project_6 from '../assets/img/web6.png'
const Portfolio = () => {

    
  return (
   <section>
    <div>
        <h3 className='text-3xl py-1'>Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
    </div>
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1'>
            <img src={project_1} alt='/' className='rounded-lg object-cover' width={'100%'} height={'100%'}/>
        </div>
        <div className='basis-1/3 flex-1'>
            <img src={project_2} alt='/' className='rounded-lg object-cover' width={'100%'} height={'100%'}/>
        </div>
        <div className='basis-1/3 flex-1'>
            <img src={project_3} alt='/' className='rounded-lg object-cover' width={'100%'} height={'100%'}/>
        </div>
        <div className='basis-1/3 flex-1'>
            <img src={project_4} alt='/' className='rounded-lg object-cover' width={'100%'} height={'100%'}/>
        </div>
        <div className='basis-1/3 flex-1'>
            <img src={project_5} alt='/' className='rounded-lg object-cover' width={'100%'} height={'100%'}/>
        </div>
        <div className='basis-1/3 flex-1'>
            <img src={project_6} alt='/' className='rounded-lg object-cover' width={'100%'} height={'100%'}/>
        </div>
    </div>
   </section>
  )
}

export default Portfolio