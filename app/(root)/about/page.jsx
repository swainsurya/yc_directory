import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      About Page this One <Link href={"/"} className='bg-yellow-300 text-black'>Home</Link>
    </div>
  )
}

export default page
