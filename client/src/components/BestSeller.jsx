import React from 'react'
import { assets } from '../assets/assets'
import ProductCard from './ProductCard'
const BestSeller = () => {
  return (
    <div>
       <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Categories</p>
        </div>
        <div>
            <ProductCard/>
        </div>
        
    </div>
  )
}

export default BestSeller
