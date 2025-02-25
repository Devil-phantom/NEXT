import React from 'react'
import Navigation from '../../components/navigation'
import ApiButtons from '../../components/ApiButtons'
import Link from 'next/link'

const Photos = async () => {

  interface User {
    id: number;
    url: string;
  }

  const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=live_fpu54YZAbUgok4odMFWzH0sBZI06PqTyXC172eGJRh64TLFUcj6k2nBHLvvZA4QS');
  const users:User[] = await res.json();

  return (
<main>
<Navigation />
<div><p>.</p></div>
<div className='flex'>
<ApiButtons />
<div className='ml-24 mt-20 rounded w-3/5 h-96 bg-white overflow-y-auto overflow-x-hidden border font-mono text-black flex-col relative'>
    <div className='h-7 w-[100%] mr-[1px] bg-black flex justify-between items-center text-white sticky top-0 rounded-t-md'>
        <div className='ml-2'>
            <p>Photos</p>
        </div>
        <div className='mr-4'>
            <Link href='/APIcalls' className=' hover:bg-white hover:text-black p-1'>x</Link>
        </div>
    </div>
    <div className='ml-2 mt-3'>
    <ul className='grid grid-flow-row grid-cols-2 gap-2'>
        {users.map(user => 
        <li key={user.id}>
          <img src={user.url} width="70%"></img>
        </li>)}
      </ul>

    </div>
    
</div>
</div>

</main>
  )
}

export default Photos