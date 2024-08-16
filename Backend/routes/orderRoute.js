import express from "express"
import { authMiddleware } from "../middleware/auth.js"

import { placeOrder, verifyOrder, userOrders, listOrders, updateStatus, totalCount, monthlyCount } from "../controllers/orderController.js"

const orderRouter = express.Router();


orderRouter.post("/placeorder", authMiddleware, placeOrder)
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/usersorders", authMiddleware, userOrders)
orderRouter.get("/list", listOrders)
orderRouter.post("/status", updateStatus)
orderRouter.get("/count", totalCount)
orderRouter.get("/chart", monthlyCount)
export default orderRouter;
