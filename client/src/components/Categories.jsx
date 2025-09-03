import React from 'react'
import { assets, categories } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Categories</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-6 gap-8'>
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className='group cursor-pointer py-5 px-3 gap-2
                rounded-lg flex flex-col justify-center items-center'
                style={{ backgroundColor: category.bgColor }}
                onClick={() => {
                  navigate(`/products/${category.text.toLowerCase()}`)
                  window.scrollTo(0, 0) // correct way to scroll
                }}
              >
                <img
                  className='group-hover:scale-110 transition max-w-28'
                  src={category.image}
                  alt={category.text}
                />
                <p className='text-sm font-medium'>{category.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Categories
