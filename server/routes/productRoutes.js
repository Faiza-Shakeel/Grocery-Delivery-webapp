import express from "express"
import { upload } from "../configs/multer.js"
import { isSellerAuth } from "../controllers/sellerControllers.js"
import { addProduct, changeStock, productById, productList } from "../controllers/productController.js"
const productRouter=express.Router()
productRouter.post("/add",upload.array("images"),isSellerAuth,addProduct)
productRouter.post("/stock",isSellerAuth,changeStock)
productRouter.get("/list", productList)
productRouter.get("/id",productById)
export default productRouter
