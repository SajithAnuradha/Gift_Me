import express from 'express'
import { loginAdmin, registerAdmin } from '../controllers/adminController.js'

const userRouter = express.Router();


userRouter.post('/register', registerAdmin)
userRouter.post('/login', loginAdmin)


export default userRouter;