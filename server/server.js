import cookieParser from "cookie-parser";
import express  from "express";
import cors from "cors"
import connectDB from "./configs/db.js";
import "dotenv/config"
import userRouter from "./routes/UserRoutes.js";
const port = process.env.Port || 4000
const app = express()


await connectDB()
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

app.listen(port ,()=>{
    console.log(`server is running on http://localhost:${port}`)
})
