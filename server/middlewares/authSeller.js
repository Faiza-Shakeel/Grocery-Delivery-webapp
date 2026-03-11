import jwt from "jsonwebtoken"
const authSeller = (req,res,next)=>{
     
     const sellerToken = req.cookies.sellerToken
        if (!sellerToken) {
            return res.json({ success: false, message: "Unauthorized" })
        }
        try {
            const tokendecoded = jwt.verify(sellerToken, process.env.JWT_SECRET)
            if (tokendecoded.email === process.env.SELLER_EMAIL  ) {
            next()
        } }
        catch (error) {
            console.log(error.message)
            return res.json({ success: false, message: "Invalid Token" })
        }
    }
    
    export default authSeller