import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      Hello World buddy
      <Link href={"/about"} className='bg-yellow-300 mx-5 text-black'>ABOUT PAGE</Link>
    </div>
  )
}

export default page
