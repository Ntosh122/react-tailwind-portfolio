import React from 'react'
import {AiFillLinkedin, AiFillDribbbleSquare, AiFillTwitterSquare } from 'react-icons/ai';
import imgTim from '../assets/img/dev-ed-wave.png'
const Hero = () => {
  return (
    <>
        <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-teal-500 font-medium md:text-6xl'>Tim Deavis</h2>
            <h3 className='text-2xl py-2 md:3xl'>UI / UX Designer</h3>
            <p className='text-md py-5 leading-10 text-gray-800 md:text-xl max-w-lg mx-auto'>
                Freelancer providing services for programming and design content
                needs. Join me down below and let's get cracking!
            </p>
        </div>
        <div className='text-4xl flex justify-center gap-16 py-3 text-gray-700'>
            <a href='/'>
                <AiFillLinkedin/>
            </a>
            <a href='/'>
                <AiFillDribbbleSquare/>
            </a>
            <a href='/'>
                <AiFillTwitterSquare/>
            </a>   
        </div>
        <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:h-96 md:w-96'>
            <img src={imgTim} alt='/' style={{objectFit:'cover',height:'100%'}}/>
        </div>
    </>
  )
}

export default Hero
