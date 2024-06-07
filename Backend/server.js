import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import giftRouter from './routes/giftRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';

// app config
const app = express();

const port = 4000;

// middleware
app.use(express.json());// this will allow us to parse the data from the client
app.use(cors());// this will allow us to make request from the client
app.use("/images", express.static('uploads'))

//db connection
connectDB();
//api endpoints

app.use("/api/gift", giftRouter)
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)

app.get("/", (req, res) => {
    res.send("ÄPI is working")
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})
//mongodb+srv://sajithanuradha860:C-24nLzSL38#yby@cluster0.zv9urxi.mongodb.net/?