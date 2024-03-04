'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'


const ProductId = () => {

    const params = useParams()

    console.log(params);

    return (
        <div>
            <div className='flex gap-4 justify-between px-10'>
                <h1 className='text-5xl'>Products {params.id}</h1>
                <Link href="/products">
                    <p className='text-2xl'>Volver</p>
                </Link>
                
            </div>


            <div className='flex justify-center gap-4'>
                <div className='p-6 bg-slate-400 flex flex-col rounded-lg'>
                    <p className='text-white text-2xl mb-3'>Product {params.id}</p>
                    <button className=' bg-slate-50 p-2 rounded-lg'>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default ProductId