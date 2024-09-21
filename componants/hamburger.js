"use client"
import { useState } from 'react';
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

const hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className=''>
        
      <div className="hidden md:hidden space-x-4">
        <Link href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
        <Link href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded">About</Link>
        <Link href="/services" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Services</Link>
        <Link href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Contact</Link>
      </div>


      <div className={`absolute  left-0 w-full h-full flex  z-20 text-2xl gap-5 bg-slate-500 ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex justify-center items-center flex-col m-auto gap-4'>
          <Link href="/" className="block text-white hover:bg-blue-700 px-3 py-2">Home</Link>
          <Link href="/about" className="block text-white hover:bg-blue-700 px-3 py-2">About</Link>
          <Link href="/services" className="block text-white hover:bg-blue-700 px-3 py-2">Services</Link>
          <Link href="/contact" className="block text-white hover:bg-blue-700 px-3 py-2">Contact</Link>
        </div>
      <button className=' h-40 fixed flex justify-center items-center right-0 top-0 w-40 ' onClick={() => setIsOpen(!isOpen)}>
      <div class="close-icon">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
    </div>
      </button>
      </div>
      <div className=' absolute right-0'>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} onClick={toggleMenu}>
            <img className=' h-12 w-12 cursor-pointer' src="loader.png" alt="hamburger" />
          </motion.div>
        </div>
    </div>
  )
}

export default hamburger
