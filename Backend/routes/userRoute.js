import express from 'express'
import { loginUser, registerUser, totalCount } from '../controllers/userController.js'


const userRouter = express.Router();


userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/count', totalCount)


export default userRouter;