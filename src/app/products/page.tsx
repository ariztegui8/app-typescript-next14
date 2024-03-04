'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Products = () => {

    const router = useRouter()

    const pageProductId = (id: string) => {
        router.push(`/products/${id}`)
    }


    const boxs = [
        {
            name: 'Product 1',
            id: '1'
        },
        {
            name: 'Product 2',
            id: '2'
        },
        {
            name: 'Product 3',
            id: '3'
        },
        {
            name: 'Product 4',
            id: '4'
        },
        {
            name: 'Product 5',
            id: '5'
        },
        {
            name: 'Product 6',
            id: '6'
        },
        {
            name: 'Product 7',
            id: '7'
        },
        {
            name: 'Product 8',
            id: '8'
        },
        {
            name: 'Product 9',
            id: '9'
        },
        {
            name: 'Product 10',
            id: '10'
        },
    ]


    return (
        <div>
            <div className='flex justify-between gap-4 px-10'>
                <h1 className='text-5xl mb-10'>Products</h1>
                <Link href="/">
                    <p className='text-2xl'>Volver</p>
                </Link>
            </div>

            <div className='flex justify-center gap-4 px-10 w-full flex-wrap'>
                {boxs.map(box => (
                    <div key={box.id} className='p-6 bg-slate-400 flex flex-col rounded-lg'>
                        <p className='text-white text-2xl mb-3'>{box.name}</p>
                        <button onClick={() => pageProductId(box.id)} className=' bg-slate-50 p-2 rounded-lg'>Entrar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products