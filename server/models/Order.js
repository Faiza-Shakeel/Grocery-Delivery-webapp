 
import mongoose  from "mongoose"
const orderSchema=new mongoose.Schema({
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    items:[{
        product:{
            type:String,
            required:true,
            ref:"Product"},
        quantity:{
            type:Number,
            required:true}
}],
amount:{
    type:Number,
    required:true
},
status:{
    type:String,
    enum:["pending","completed","cancelled"],
    default:"pending"},
address:{
    type:String,
    required:true,
},
paymentType:{
    type:String,
    required:true,
     
},
isPaid:{
    type:Boolean,
    default:false ,
    required:true

}
},{timestamps:true}) 
   
 const Order=mongoose.model("Order",orderSchema)
 export default Order