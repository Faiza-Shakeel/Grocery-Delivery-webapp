import mongoos from "mongoose";
const UserSchema =new mongoos.Schema({
    name:
    {   type:String,
        required:true

    },
    email:
    {
 type:String,
        required:true,
        unique:true
    },
    password:
    {
 type:String,
        required:true,
     
    },
    cartitems :{
        type :Object,
        default:{}
    }
},{minimize:false})

const User = mongoos.model("user",UserSchema)
export default User