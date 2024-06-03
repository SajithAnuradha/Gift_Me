import express from 'express';
import cors from 'cors';


// app config
const app = express();

const port = 4000;

// middleware
app.use(express.json());// this will allow us to parse the data from the client
app.use(cors());// this will allow us to make request from the client

app.get("/", (req, res) => {
    res.send("ÄPI is working")
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})
