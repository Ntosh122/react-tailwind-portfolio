import React  from 'react'
import { BsFillSunFill } from 'react-icons/bs'

const Nav = () => {

  return (
        <div>
             <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-black'>developedbytim</h1>
            <ul className='flex items-center'>
                <li>
                    <BsFillSunFill  className='cursor-pointer text-2xl'/>
                </li>
                <li>
                    <a href='/' className='bg-gradient-to-r from-purple-500
                     to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume
                     </a>
                </li>
            </ul>
        </nav>
        </div>
       
  )
}

export default Nav