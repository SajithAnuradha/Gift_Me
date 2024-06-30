import express from 'express';
import { addgift, listgift, removegift, totalCount } from '../controllers/giftController.js';
import multer from "multer"


const giftRouter = express.Router();


//Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)

    }
})
const upload = multer({ storage: storage })



giftRouter.post("/add", upload.single("image"), addgift)
giftRouter.get("/list", listgift)
giftRouter.post("/remove", removegift)
giftRouter.get("/count", totalCount)




export default giftRouter;