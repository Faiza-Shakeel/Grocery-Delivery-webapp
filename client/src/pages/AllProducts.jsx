import React from 'react'
import { useState,useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'
const AllProducts = () => {
  const {products,searchquery} = useAppContext()
  const [filteredProducts, setfilteredProducts] = useState([])
  useEffect(() => {
    if(searchquery.length>0){
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchquery.toLowerCase())
      );
      setfilteredProducts(filtered);
    }
    else{
      setfilteredProducts(products)
    }
   
  }, [products,searchquery])
  
  return (
 <div className='mt-16 flex flex-col'>
<div className='flex flex-col items-end w-max'>
<p className='text-2x1 font-medium uppercase'>All products</p>
<div className='w-16 h-0.5 bg-primary rounded-full'></div>
</div>
<div className='grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4 
  xl:grid-cols-5 
  gap-6
  mt-6 '>
{filteredProducts.filter((product) => product.inStock).map((product,index) =>
 <ProductCard key={index} product={product}/>

  )}
</div>
  </div>
  )
}

export default AllProducts