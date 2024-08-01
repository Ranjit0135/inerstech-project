import express from 'express';
import { deleteUser, getAllUsers, getUser, newUser } from '../controllers/user.controllers.js';
import { adminOnly } from '../middlewares/auth.js';

const app = express.Router();

app.post('/new', newUser)

// all user
app.get("/all",adminOnly,getAllUsers)

// dynamic id
app.route("/:id").get(getUser).delete(adminOnly,deleteUser)




export default app