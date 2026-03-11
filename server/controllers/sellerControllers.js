import jwt from "jsonwebtoken";
//seller login
export const sellerLogin = (req, res) => {
    const { email, password } = req.body
    try{ 
    if (email === process.env.SELLER_EMAIL && password === process.env.SELLER_PASSWORD) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" })
        res.cookie("sellerToken", token, {
             httpOnly:true,
    secure:process.env.NODE_ENV === "production",
    sameSite:"strict",
    maxAge:15*60*1000
    })
    return res.json({success:true,message:"User logged in successfully",token})
}
else {  
 return res.json({ success: false, message: "Invalid email or password" });
        }}
catch(error){
    console.log(error.message)
   res.json({success:false,message:error.message})
} 
}
//seller auth
export const isSellerAuth = async(req,res)=>{
    try { 
        return res.json({success:true })
    } catch (error) {
        console.log(error.message)
        return res.json({success:false })
    }}
//seller logout
export const sellerLogout = (req,res)=>{
    try{
            res.clearCookie("sellerToken", {
    httpOnly:true,
    secure:process.env.NODE_ENV === "production",
    sameSite:"strict",
     
    })
            return res.json({success:true,message: "logged out successfully"})
      }
     catch (error) {
        console.log(error.message)
        return res.json({success:false,message:"Logout failed"})
    }
    }