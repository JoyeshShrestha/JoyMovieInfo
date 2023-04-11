
import React from 'react'
import Link from 'next/link'

function page() {
  return (
   <>
<div className="flex justify-between">
   <h1 className='flex my-5 text-lg'>LOGO</h1>
   <nav className='flex my-5 mx-5  '>
    <ul className='flex  border-2 rounded-full p-2 '>
        <Link className='flex-auto px-3   border-r-2 hover:bg-slate-100 hover:text-slate-900 ' href="/"><li>Home</li></Link>
        <Link className='flex-auto px-3 pr-3 border-r-2 border-r-2 hover:bg-slate-100 hover:text-slate-900' href="/upcoming"><li>Up Coming</li></Link>
        <Link className='flex-auto px-3  hover:bg-slate-100 hover:text-slate-900' href="/toprated" ><li>Top Rated</li></Link>
    </ul>
   </nav>

   <div className="flex">Search</div>
   </div>
   
   </> 
  )
}

export default page
