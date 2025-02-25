import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
<div className='h-12 w-screen bg-white flex fixed p-2 text-slate-900 justify-between items-center z-50 font-mono'>
      <div>
        LOGO.
      </div>
<div className='space-x-10 flex mr-10'>
  <div className='p-2'>
    <Link href='/' className='hover:bg-black hover:text-white rounded p-2 '>Home</Link>
  </div>
  <div className='p-2'>
    <Link href='/' className='hover:bg-black hover:text-white rounded p-2 '>About</Link>
  </div>
  <div className='p-2'>
    <Link href='/' className='hover:bg-black hover:text-white rounded p-2 '>Contact</Link>
  </div>
  <div className='p-2'>
    <Link href='/' className='hover:bg-black hover:text-white rounded p-2 '>Services</Link>
  </div>

</div>
    </div>
  )
}

export default Navigation