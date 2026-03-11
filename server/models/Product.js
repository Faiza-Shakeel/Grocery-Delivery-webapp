import mongoos from "mongoose";
const ProductSchema =new mongoos.Schema({
    name:
    {   type:String,
        required:true

    },
    description:
    {
 type:String,
        required:true,
        
    },
    price:
    {
 type:Number,
        required:true,
     
    },
    offerPrice:
    {
        type:Number,
        required:true,
    },
    image:
    {
        type:Array,
        required:true,
    },
    category:
    {
        type:String,
        required:true,
    },
    inStock:
    {
        type:Boolean,
        default:true
    }
    }
    
,{timestamps:true})

const Product = mongoos.model("product",ProductSchema)
export default Product