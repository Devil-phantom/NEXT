import Link from 'next/link'
import React from 'react'

const ApiButtons = () => {
  return (

    <div className='mt-5 ml-7 font-mono'>

        <ul className='mt-20'>
            <li className='mt-10'>  
                <Link href='/APIcalls/UserData' className='p-2 hover:bg-white hover:text-black rounded text-3xl border'> User Data.</Link>
            </li>
            <li className='mt-10'>  
                <Link href='/APIcalls/Photos' className='p-2 hover:bg-white hover:text-black rounded text-3xl border'> Photos.</Link>
            </li>
            <li className='mt-10'>  
                <Link href='/APIcalls/Comments' className='p-2 hover:bg-white hover:text-black rounded text-3xl border'> Comments.</Link>
            </li>
            <li className='mt-10'>  
                <Link href='/APIcalls/Posts' className='p-2 hover:bg-white hover:text-black rounded text-3xl border'> Posts.</Link>
            </li>  
</ul>
</div>

  )
}

export default ApiButtons
