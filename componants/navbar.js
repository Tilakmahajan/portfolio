import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
<>
    <div className='text-white gap-10 font-bold text-xl  flex'>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/projects">project</Link>
        <Link href="/contact">contact</Link>
    </div>
</>  )
}

export default navbar


