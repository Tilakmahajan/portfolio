"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react';
import Image from 'next/image';

const Projects = () => {

    const shownavbar = () => {
        alert("sdf")
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
  <div className="hidden md:hidden space-x-4">
        <Link href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
        <Link href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded">About</Link>
        <Link href="/projects" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Projects</Link>
        <Link href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Contact</Link>
      </div>


      <div className={`absolute  left-0 w-full h-full flex  z-20 text-2xl gap-5 bg-slate-900 ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex justify-center items-center flex-col m-auto gap-4'>
          <Link href="/" className="block text-white hover:bg-blue-700 px-3 py-2">Home</Link>
          <Link href="/about" className="block text-white hover:bg-blue-700 px-3 py-2">About</Link>
          <Link href="/projects" className="block text-white hover:bg-blue-700 px-3 py-2">Projects</Link>
          <Link href="/contact" className="block text-white hover:bg-blue-700 px-3 py-2">Contact</Link>
        </div>
        <button className=' h-40 fixed flex justify-center items-center right-0 top-0 w-40 ' onClick={() => setIsOpen(!isOpen)}>
      <div className="close-icon">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
    </div>
      </button>
      </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }} className='parent absolute w-full h-[99.8%] p-5 flex justify-between text-white'>
               <div className='md:h-40 fixed flex justify-center items-center right-6 md:right-0 top-5 md:top-0 w-12 h-12 md:w-40 '>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} onClick={toggleMenu}>
            
    <Image 
  width={500} 
  height={300}  className=' h-12 w-12 cursor-pointer' src="/loader.png" alt="hamburger" />
          </motion.div>
        </div>
                <div className=' hidden md:w-[15%]  md:flex justify-center items-center'>
                    <div className="w-20 h-24 flex text-center animate-pulse ">
                        <button>
                            <Link href={"/about"}>
                                
    <Image 
  width={500} 
  height={300}  src="/left-arrow.png" alt="right arrow png" />
                                <h1 className="tooltiptext text-white font-serif font-bold">about</h1>
                            </Link>
                        </button>
                    </div></div>
                <div className='md:w-[70%] p-20  scrollable-container'>

                    <h1 className='text-5xl flex font-bold  '>Code laboratory</h1>
                    <div className='text-xl'>
                        ReactJS/Web Components, Brackets extensions and everything else accomplished on my spare software development time.
                    </div>

                    <div className='grid md:grid-cols-2 list-none gap-7 my-10 '>
                        <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }} href="https://github.com/Tilakmahajan/Get-me-chai"> <li id='li1' className='listcontainer py-7 font-bold text-4xl flex justify-center items-center text-slate-800 underline not-italic hover:italic  none h-60'>Get me Chai</li></motion.a>
                        <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }} href="https://github.com/Tilakmahajan/Password-Manager"> <div id='li2' className='listcontainer py-7 font-bold text-4xl text-center flex underline  not-italic hover:italic  justify-center items-center  none h-60'>Password Manager</div></motion.a>
                        <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }} href="https://github.com/Tilakmahajan/Songsa-web"> <li id='li3' className='listcontainer py-7 font-bold text-4xl flex justify-center items-center underline not-italic hover:italic  none h-60'>Songsa</li></motion.a>
                        <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }} href="https://github.com/Tilakmahajan/netflix-clone-frontend-"> <li id='li4' className='listcontainer py-7 font-bold text-5xl flex justify-center items-center underline not-italic hover:italic  text-red-500 none h-60 mb-7'>Netflix</li></motion.a>


                    </div>
                </div>


                <div className='hidden md:w-[15%] md:flex justify-center items-center '>
                    <div className="w-20 h-24 flex text-center tooltip  animate-pulse ">
                        <button>
                            <Link href={"/contact"}>
                                
    <Image 
  width={500} 
  height={300}  src="/right-arrow.png" alt="right arrow png" />
                                <h1 className="tooltiptext text-white font-serif font-bold">contact</h1>
                            </Link>
                        </button>
                    </div></div>

            </motion.div>
        </>
    )
}

export default Projects
