import User from '../models/User.js'
import bcrypt from 'bcrypt'
 import jwt from 'jsonwebtoken'

// POST route to add a person
export const register=async(req, res) =>{
    try{
        const {name,email,password} = req.body // Assuming the request body contains the  User data
if (!name || !email, !password){
    return res.json({success:false,message:"Missing Credentials"})
}
const existingUser = await User.findOne({email})
if (existingUser)
    return res.json({success:false,message:"user already exixts"})
       
const hashedPassword = await bcrypt.hash(password,10)
const newUser = await User.create({
    name,
    email,
    password:hashedPassword
})
const token =  jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:"15min"})
res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV === "production",
    sameSite:"strict",
    maxAge:15*60*1000
    })
    return res.json({success:true,message:"User registered successfully",token})
}
catch(error){
    console.log(error.message)
   res.json({success:false,message:error.message})
} 
}

// Login Route
export const login = async(req,res)=>{
    try {
        const {email,password} = req.body 
        if (!email || !password){
            return res.json({success:false,message:"Missing Credentials"})
        }
        const existingUser = await User.findOne({email})
        if (!existingUser){
            return res.json({success:false,message:"User not found"})
        }
        const isPasswordValid = await bcrypt.compare(password,existingUser.password)
        if (!isPasswordValid){
            return res.json({success:false,message:"Invalid Password"})
        }
        const token =  jwt.sign({id:existingUser._id},process.env.JWT_SECRET,{expiresIn:"15min"})
res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV === "production",
    sameSite:"strict",
    maxAge:15*60*1000
    })
    return res.json({success:true,message:"User logged in successfully",token})
}
    catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }}
//auth route
export const isAuth = async(req,res)=>{
    try {
        const userId = req.userId
        const user = await User.findById(userId).select("-password")
        if (!user){
            return res.json({success:false,message:"User not found"})
        }
        return res.json({success:true,message:"User authenticated",user})
    } catch (error) {
        console.log(error.message)
        return res.json({success:false,message:"Authentication failed"})
    }}
    // Logout Route
    export const userLogout = (req,res)=>{
        try{
            res.clearCookie("token")
            return res.json({success:true,message:"logged out successfully"})
      }
     catch (error) {
        console.log(error.message)
        return res.json({success:false,message:"Logout failed"})
    }
    }