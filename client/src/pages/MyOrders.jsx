import React from 'react'
import { useState ,useEffect} from 'react'
import { useAppContext } from '../context/AppContext'
import { dummyOrders } from '../assets/assets'

const MyOrders = () => {
    const [orders, setorders] = useState([])
    const {currency}=useAppContext()
    const fetchOrders=()=>{
        setorders(dummyOrders)
    }
    useEffect(() => {
      fetchOrders()
    }, [])
    
  return (
     <div className="mt-16">
      <div className="flex flex-col   w-full">
        <div className="text-2xl font-medium">MyOrders </div>
      </div>
      {orders.map((order, index)=>{
<div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5
max-w-4x1'>
<p className='flex justify-between md:items-center text-gray-400
md:font-medium max-md:flex-col'>
<span>OrderId : {order._id}</span>
<span>Payment: {order.paymentType}</span>
<span>Total Amount: {currency} {order.amount}</span>
</p>
{order.items.map((item, index)=>{
<div  key={index} className={`relative bg-white text-gray-500 ${
order.item.length !== index + 1 && "border-b"} border-gray-300 flex flex-col md:flex-row md:item-center justify-between p-4
py-5 md:gap-16 w-full max-w-4xl`}>
<div className='flex items-center mb-4 md:mb-0'>
<div className='bg-primary/10 p-4 rounded-lg'>
<img src={item.product.image[0]} alt="" className='w-16 h-16' />
</div>
 <div className='ml-4'>
    <h2 className='text-xl font-medium text-gray-800'>{item.product.name}</h2>
<p>Category:{item.product.category}</p>
 </div>
</div>
 
 <div className='text-lg font-medium'>
    <p>Quantity:{item.quantity || "1"}</p>
    <p>Status:{order.status}</p>
    <p>Date:{new Date(order.createdAt).toLocaleDateString()}</p>
 </div>
 <p className='text-primary text-lg font-medium'>
    Amount:{currency}{item.product.offerPrice * item.quantity}
 </p>
  </div>
})}
   </div>
 
})} 
 </div>)}
export default MyOrders
