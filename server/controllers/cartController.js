import User from "../models/User.js"
export const updateCart =async()=>{
 try {
         const {userId,cartItems} = req.body
         await User.findByIdAndUpdate(id,{cartItems})
         res.json({success:true,message:"cart Updated"})
     }
      catch (error) {
          console.log(error.message)
     res.json({success:false,message:error.message})
     }
  
   
}