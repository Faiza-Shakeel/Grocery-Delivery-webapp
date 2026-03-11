import express from "express"
import authUser from "../middlewares/authUser.js"
import { getAllOrders, getUserOrders, placeOrderCOD } from "../controllers/orderController.js"
const orderRouter=express.Router()
orderRouter.post("/create",authUser,placeOrderCOD)
orderRouter.get("/seller",authUser,getUserOrders)
orderRouter.get("/user",authUser,getAllOrders)
export default orderRouter