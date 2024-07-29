import express from 'express';

//  importing routes
import userRoutes from './routes/user.route.js'
import { connectDatabase } from './types/types.js';

const port = 3000

connectDatabase();

const app = express();

app.get('/', (req, res) => {
    res.send("Api working")
})

app.use("/api/v1/user",userRoutes)

app.listen(port,()=>{
    console.log("server listening on port")
});