import express from "express"
import { isSellerAuth, sellerLogin } from "../controllers/sellerControllers.js"
import authSeller from "../middlewares/authSeller.js"
import { sellerLogout } from "../controllers/sellerControllers.js"
const sellerRouter = express.Router()
sellerRouter.post('/login',sellerLogin)
sellerRouter.get('/is-auth',authSeller,isSellerAuth)
sellerRouter.get('/logout',sellerLogout)
export default sellerRouter