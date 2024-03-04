import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-between gap-4 px-10'>
      <h1 className='text-3xl'>Home</h1>
      <Link href="/products">
        <p className='text-3xl'>Products</p>
      </Link>
    </div>
  )
}

export default Home