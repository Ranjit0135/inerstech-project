import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.models.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser = async(
  req:Request<{},{},NewUserRequestBody>,
  res:Response,
  next:NextFunction
)=>{
try {
    const {name,email,photo,gender,role,dob,_id} = req.body;

   const user =  await User.create({
    name,
    email,
    photo,
    gender,
    role,
    dob,
    _id
    })
  return res.status(200).json({
    success:true,
    message:`welcome, ${user.name}`
    })
} catch (error) {
  return res.status(200).json({
    success:true,
    message:error,
    })
}
}