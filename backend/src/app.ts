import express from 'express'
import userRoutes from './routes/user.routes.js'
import { connectDatabase } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';

const  port = 3000;

connectDatabase();
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Api working")
})

app.use("/api/v1/user",userRoutes)

app.use(errorMiddleware)

app.listen(port, ()=>{
console.log(" my server is running on porty " + port)
});