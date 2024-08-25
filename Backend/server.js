import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import 'dotenv/config'
import setUpRoutes from './start/routes.js';

const app = express();

const port = 4000;

// middleware
app.use(express.json());// this will allow us to parse the data from the client
app.use(cors());// this will allow us to make request from the client
app.use("/images", express.static('uploads'))
setUpRoutes(app);

app.all("*", (req, res, next) => {
    res.status(404).json({
      status: "fail",
      message: `Can't find ${req.originalUrl} on this server!`,
    });
  });

// Connect to the database and start the server
connectDB().then(() => {
    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });
