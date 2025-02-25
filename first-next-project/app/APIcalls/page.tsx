import React from 'react'
import Navigation from '../components/navigation'
import Link from 'next/link'
import ApiButtons from '../components/ApiButtons'

const FalseAPI = () => {
  return (
<main>
<Navigation />
<div><p>.</p></div>
<div className='flex'>
<ApiButtons />
</div>

</main>
   
  )
}

export default FalseAPI