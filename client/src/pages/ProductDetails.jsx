 import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { products, addToCart, navigate, currency } = useAppContext();
  const { id } = useParams();

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

  const product = products.find((prod) => prod._id === id);

  // Handle related products
  useEffect(() => {
    if (product) {
      let productCopy = products.slice();
      productCopy = productCopy.filter(
        (prod) => prod.category === product.category && prod._id !== product._id
      );
      setRelatedProducts(productCopy.slice(0, 5));
    }
  }, [products, product]);

  // Handle thumbnails
  useEffect(() => {
    setThumbnail(product?.image?.[0] || null);
  }, [product]);

  if (!product) {
    return (
      <div className="text-center mt-16 text-lg font-medium">
        Product not found
      </div>
    );
  }

  return (
    <div className="mt-16 mb-10">
      {/* Breadcrumb */}
      <p>
        <Link to="/">Home</Link> /{" "}
        <Link to="/Products">Products</Link> /{" "}
        <Link to={`/Products/${product.category.toLowerCase()}`}>
          {product.category}
        </Link>{" "}
        / <span className="text-indigo-500">{product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-4">
        {/* Product Images */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {product.image.map((image, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(image)}
                className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
            <img
              src={thumbnail}
              alt="Selected product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl font-medium">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-0.5 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="star"
                />
              ))}
            <p className="text-base ml-2">{product.rating}</p>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-gray-500/70 line-through">
              MRP: {currency}
              {product.price}
            </p>
            <p className="text-2xl font-medium">
              MRP: {currency}
              {product.offerPrice}
            </p>
            <span className="text-gray-500/70">(inclusive of all taxes)</span>
          </div>

          {/* Description */}
          <p className="text-base font-medium mt-6">About Product</p>
          <ul className="list-disc ml-4 text-gray-500/70">
            {product.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex items-center mt-10 gap-4 text-base">
            <button
              onClick={() => addToCart(product._id)}
              className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToCart(product._id);
                navigate("/cart");
              }}
              className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="flex flex-col items-center mt-20">
        <div className="flex flex-col items-center w-max">
            <p className="text-3xl font-medium">Related Products</p>
            <div className="w-20 h-0.5 bg-blue-700 rounded-full mt-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
            {relatedProducts.filter((prod) => prod.inStock).map 
       ((product, index) => (
        <ProductCard  key={index} product={product} /> 
       ))} </div>
       <div>
        <button className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded bg-blue-700 text-white hover:bg-blue-600" onClick={()=>{navigate("/Products");scrollTo(0,0)}}>See More</button></div>
        </div>
     
      </div>
  );
};

export default ProductDetails;
