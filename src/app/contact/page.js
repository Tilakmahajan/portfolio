"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';



const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const notify = () => toast("Thank you😊");
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
     <div className='md:h-40 fixed flex justify-center items-center right-6 md:right-0 top-5 md:top-0 w-12 h-12 md:w-40  '>
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
      <div className=' hidden md:w-[15%] md:flex justify-center items-center  '> <div className='w-20 h-24 flex text-center tooltip animate-pulse'>
        <Link href={"/projects"}>
          
    <Image 
  width={500} 
  height={300}  src="/left-arrow.png" alt="right arrow png" />
          <h1 className="tooltiptext text-white font-serif font-bold">Projects</h1>

        </Link> </div></div>
      <div className=' md:w-[70%] scrollable-container m-8 text-white  '>
      <h1 className='text-5xl flex font-bold '>Get in touch</h1>
                    <div className='text-xl mt-4'>
                        If you wanna get in touch, talk to me about a project collaboration or just say hi,
                        fill up the awesome form below or send an email to
                        <a href="mailto :tilakmahajan1610@gmail.com"> tilakmahajan1610@gmail.com</a>
                    </div>
         
         
          <div className='flex mt-10 justify-center items-center'>
                        
    <Image 
  width={500} 
  height={300}  className='h-10 w-10  relative' src="/avtar.gif" alt="" />
                        <input className=' feedback ' placeholder='Enter name' type="text" name="name" >
                        </input>
                    </div>
                    <div className='flex mt-10  justify-center items-center'>
                        
    <Image 
  width={500} 
  height={300}  className='h-10 w-10' src="/artical.gif" alt="" />
                        <input className=' feedback' placeholder='Write feedback' autocomplete="off" type="text" name="name" fdprocessedid="kn4fo">
                        </input>
                    </div>
                    <div className='btn  my-5 flex justify-center items-center'>
                        <motion.button initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }} className='border rounded-md border-white ml-5 bg-slate-500 p-3' onClick={notify}>Submit your feedback</motion.button>
                             <ToastContainer />
                    </div>
                    <div className='m-auto pt-5'>
                        <h1>Lets get social</h1>
                        <p>Follow my online fan page on Facebook and profiles on GitHub and Linkedin.</p>
                        <div className='m-3 gap-8 md:flex md:gap-5'>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}>
                                <a href="https://www.facebook.com/tilak.mahajan.944" className="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-sm text-center bg-blue-500 text-white transition-colors duration-200 transform  rounded-lg dark:text-gray-300  hover:bg-gray-600 dark:hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    <span className="text-sm text-white dark:text-gray-200">FACEBOOK</span></a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }} className='flex justify-center items-center'>
                                <a href="https://www.linkedin.com/in/tilak-mahajan-42578b257/" className="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-sm text-center bg-indigo-800 text-white transition-colors duration-200 transform  rounded-lg dark:text-gray-300  hover:bg-gray-600 dark:hover:bg-gray-700">
                                    
    <Image 
  width={500} 
  height={300}  className='h-5 w-5 m-0.25' src="/https://www.svgrepo.com/show/475661/linkedin-color.svg" alt="" />
                                    <span className="text-sm text-white dark:text-gray-200">LINKEDIN</span></a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }} className='flex justify-center items-center'>
                                <a href="https://github.com/Tilakmahajan" className="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-sm text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white  transition ease-in duration-200   font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792">
                                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                                    </svg>
                                    <span className="text-sm text-white dark:text-gray-200">GITHUB</span></a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }} className='flex justify-center items-center'>
                                
    <Image 
  width={500} 
  height={300}  className='w-8 h-8' src="/call.gif" alt="  " />
                                <span >+91 9307963601</span>
                            </motion.div>


                        </div>
                    </div>
                    </div>
            
       
      <div className='hidden w-[15%]  md:flex justify-center items-center '>
        <div className='w-20 h-24 flex text-center tooltip'>
          </div>
      </div>

    </motion.div>
    </>
  )
}

export default About
