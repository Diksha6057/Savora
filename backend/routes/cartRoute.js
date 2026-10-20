import express from "express" //default export 
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"//named export
import authMiddleware from "../middleware/auth.js";
const cartRouter=express.Router();
cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)
export default cartRouter