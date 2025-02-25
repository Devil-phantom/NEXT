import React from 'react'
import Navigation from '../../components/navigation'
import ApiButtons from '../../components/ApiButtons'
import Link from 'next/link'

const Posts = async () => {

  interface User {
    id: number;
    username: string;
    name:string;
    email:string;
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users:User[] = await res.json();

  return (
<main>
<Navigation />
<div><p>.</p></div>
<div className='flex'>
<ApiButtons />
<div className='ml-24 mt-20 rounded w-3/5 h-80 bg-white overflow-y-auto overflow-x-hidden border font-mono text-black flex-col relative'>
    <div className='h-7 w-[100%] mr-[1px] bg-black flex justify-between items-center text-white sticky top-0 rounded-t-md'>
        <div className='ml-2'>
            <p>Posts</p>
        </div>
        <div className='mr-4'>
            <Link href='/APIcalls' className=' hover:bg-white hover:text-black p-1'>x</Link>
        </div>
    </div>
    <div className='ml-7 mt-3'>
        <p>Posts</p>
    </div>
    
</div>
</div>

</main>
  )
}

export default Posts