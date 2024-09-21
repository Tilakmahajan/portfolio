"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react';
import Image from 'next/image';

const About = () => {
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
        viewport={{ once: true }} className=' absolute w-full h-[99.7%] flex justify-between '>
        <div className='md:h-40 fixed flex justify-center items-center right-6 md:right-0 top-5 md:top-0 w-12 h-12 md:w-40 '>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} onClick={toggleMenu}>
            
    <Image 
  width={500} 
  height={300}  className=' h-12 w-12 cursor-pointer ' src="/loader.png" alt="hamburger" />
          </motion.div>
        </div>
        <div className=' hidden md:w-[15%] md:flex justify-center items-center  '> <div className='w-20 h-24 flex text-center tooltipanimate-pulse '>
          <Link href={"/"}>
            
    <Image 
  width={500} 
  height={300}  src="/left-arrow.png" alt="right arrow png" />
            <h1 className="tooltiptext text-white font-serif font-bold">Home</h1>

          </Link> </div></div>
        <div className=' md:w-[70%] scrollable-container  '>
          <div className='m-10 md:m-20 text-white md:flex  flex-col h-[94.7%]  '>
            <div className='md:h-[50%]  md:flex  '>
              <div className=' md:w-[60%]  text-center  md:flex items-center justify-center  '>
                <h1 className=' text-3xl md:text-4xl gap-2 leading-relaxed font-bold'>
                  Hey! My name is Tilak.
                  I am a web & font designer</h1>

              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} className=' md:w-[40%] flex justify-center items-center '>
                
    <Image 
  width={500} 
  height={300}  className=' rounded-full md:w-[90%] w-50 h-60 md:h-[100%] ' src="/tilak.jpeg" alt="img" />
              </motion.div>

            </div>

            <div className=' h-[50%] flex flex-col gap-10  pt-4'><div className='text-xl ml-3 leading-9 '>
              I’ve always been someone who has both a creative and a logical side. When I discovered web design in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.</div>

              <div className=' text-xl ml-3 leading-9'>
                <div className='flex justify-center items-center '>
                  <a href="/">
                  <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download CV</button>
                  </a>
                </div>
                <h1 className='font-bold text-2xl'>EDUCATION :</h1>
                <div >
                  <p className='font-bold'>Computer science and engineering (B. tech)</p>
                  <p>G.H. Raisoni College Of Engineering And Business Management, Jalgaon </p>
                  <p>CGPA - 8.46</p>

                </div>

              </div>

              <div className='text-xl ml-3 leading-9'>
                <h1 className='font-bold text-2xl'>SKILLS :</h1>
                <p>Languages: C++, C, Python, Javascript, Html, CSS3.</p>
                <p> Frameworks and libraries: React.Js, Node.Js, Express.Js, Tailwind CSS</p>
                <p> Tools and databases: Mongodb, Git, Github, Microsoft Windows</p>
                <p> Additional: Oop, Data Structures And Algorithms</p>
              </div>
            </div>
          </div>

        </div>
        <div className='hidden  md: w-[15%]  md:flex justify-center items-center '>
          <div className='w-20 h-24 flex text-center tooltip animate-pulse'>
            <Link href={"/projects"}>
              
    <Image 
  width={500} 
  height={300}  src="/right-arrow.png" alt="right arrow png" />
              <h1 className="tooltiptext text-white font-serif font-bold">Projects</h1>

            </Link> </div>
        </div>

      </motion.div>
    </>
  )
}

export default About
