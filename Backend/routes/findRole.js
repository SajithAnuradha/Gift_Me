import express from 'express'
import { findRole } from '../middleware/auth.js';


const roleFindRouter = express.Router();


roleFindRouter.post('/find', findRole)


export default roleFindRouter;