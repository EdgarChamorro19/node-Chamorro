import User from '../models/User'
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp= async (req,res)=>{
    const {username, email, password, roles} = req.body


    const newUser= new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
    
    const saveUser= await newUser.save()

    const token= jwt.sign({id:saveUser._id},config.SECRET,{
        expiresIn:86400
    })
    res.status(200).json({token})
}

export const signIn= async (req,res)=>{
    res.json('singin')
}
