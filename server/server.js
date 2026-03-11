import cookieParser from "cookie-parser";
import express  from "express";
import cors from "cors"
import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";
import "dotenv/config"
import userRouter from "./routes/UserRoutes.js";
import sellerRouter from "./routes/sellerRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import addressRouter from "./routes/addressRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
const port = process.env.Port || 4000
const app = express()


await connectDB()
await connectCloudinary()
//Allow Multiple origins
const allowedOrigin=['http://localhost:5173']
// middleware configuration
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:allowedOrigin,
    Credential:true
}))
app.get("/", (req,res)=>res.send("Api is working"))

app.use("/api/user",userRouter)
app.use("/api/seller",sellerRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/address",addressRouter)
app.use("/api/order",orderRouter)
app.listen(port ,()=>{
    console.log(`server is running on http://localhost:${port}`)
})
