import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCard from './ProductCard'

const ProductCategory = () => {
  const { products } = useAppContext()
  const { category } = useParams()

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  )

  if (!searchCategory) {
    return <div className="text-center text-lg font-medium mt-16">Invalid category</div>
  }

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  )

  return (
    <div className="mt-16">
      <div className="flex flex-col items-center w-full">
        <div className="text-2xl font-medium">{searchCategory.text.toUpperCase()}</div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-lg font-medium mt-16">
          No products found in this category
        </div>
      )}
    </div>
  )
}

export default ProductCategory
