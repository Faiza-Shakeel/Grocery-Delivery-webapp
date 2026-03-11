import Order from "../models/Order.js"
import Product from "../models/Product.js"
//cash on deliver

export const placeOrderCOD=async(req,res)=>{
    try {
        const {userId,items,address  } = req.body
        if (  !items || !address ) {
            return res.json({success:false,message:"invalid data"})
        }
        const  amount=items.reduce(async(total,item)=>{
 const product= await Product.findById(item.product)
 return (await total)+product.offerPrice*item.quantity
        },0)
        //Add tax charge 2%
        amount +=Math.floor(amount*0.02)
        await Order.create({
            userId,
            items ,
            amount,
            address,
            paymentType:"COD",
            isPaid:false
        })
        res.json({success:true,message:"order placed successfully"})
    }
     catch (error) { 
    res.json({success:false,message:error.message})
    }

}
//get orders by user id
export const getUserOrders =async(req,res)=>{
    try {
        const {userId}=req.body
        const orders=await Order.find({
            userId,
            $or:[{paymentType:"COD"},{isPaid:true}]

        }).populate("items.product address").sort({createdAt:-1})
res.json({success:true,orders})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}
//get all orders for admin/seller
export const getAllOrders=async(req,res)=>{
    try {
        const orders=await Order.find({
            $or:[{paymentType:"COD"},{isPaid:true}]
        }).populate("items.product address").sort({createdAt:-1}) 
        res.json({success:true,orders})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}