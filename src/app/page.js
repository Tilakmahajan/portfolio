
"use client"
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";



export default function Home() {
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
  viewport={{ once: true }} className='bg-blue-500 h-10 -rotate-45 absolute -left-14 px-10 top-16  w-72 flex justify-center items-center text-white font-bold '>
<a href="https://github.com/Tilakmahajan" className='cursor-pointer relative'>FOLLOW ON GITHUB</a>
      </motion.div>
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
      <div className=' hidden md: w-[15%] md:flex justify-center items-center '>   <div className=" w-20  h-40 flex text-center items-center flex-col gap-4 ">
      <a className="github" title="follow on github" href="https://github.com/Tilakmahajan">
        
    <Image 
  width={500} 
  height={300}  className="h-10 w-10" src="/github-2.gif" alt="github img" /></a>
      <a className="Linkedin" title="follow on Linkdin" href="https://www.linkedin.com/in/tilak-mahajan-42578b257/">
        
    <Image 
  width={500} 
  height={300}  className="h-10 w-10" src="/Linkedin.gif" alt="linkedin img" /></a>
      <a className="instagram" title="follow on instagram" href="https://www.instagram.com/mahajan.tilak/">
        
    <Image 
  width={500} 
  height={300}  className="h-10 w-10 " src="/Instagram.gif" alt="insta img" /></a>

    </div></div>
      <div className='  text-center md: md:w-[70%] scrollable-container text-white   flex justify-center items-center flex-col gap-2 leading-7 font-semibold '>

      <h1 className="text-3xl font-bold"> Hello,My name is Tilak Mahajan</h1>
        <span>I am  full-stack web developer</span>
        <span>Feel free to take a look at my latest projects on the web portfolio page. <Link href="/projects">@projects</Link></span>
        <span>More information about me <Link href="/about">@about me</Link></span>
        <span>Get in touch<Link href="/contact">@contact</Link></span>
        <div className="md:hidden flex text-center items-center flex-row gap-4 mt-10">
      <a className="github" title="follow on github" href="https://github.com/Tilakmahajan/Tilakmahajan">
        
    <Image 
  width={500} 
  height={300}  className="h-10 w-10" src="/github-2.gif" alt="github img" /></a>
      <a className="Linkedin" title="follow on Linkdin" href="https://www.linkedin.com/in/tilak-mahajan-42578b257/">
        
    <Image 
  width={500} 
  height={300}  className="h-10 w-10" src="/Linkedin.gif" alt="linkedin img" /></a>
      <a className="instagram" title="follow on instagram" href="https://www.instagram.com/mahajan.tilak/">
        
    <Image 
  width={500} 
  height={300}  className="h-10 w-10 " src="/Instagram.gif" alt="insta img" /></a>
    </div>

          </div>


   
      <div className=' w-[15%] hidden md: md:flex justify-center items-center '>
        <div className='w-20 h-24 flex text-center tooltip animate-pulse'>
          <Link href={"/about"}>
            
    <Image 
  width={500} 
  height={300}  src="/right-arrow.png" alt="right arrow png" />
            <h1 className="tooltiptext text-white font-serif font-bold">About</h1>

          </Link> </div>
      </div>

    </motion.div>
    </>
  );
}
