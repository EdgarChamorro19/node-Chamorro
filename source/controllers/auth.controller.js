import User from '../models/User'
import jwt from "jsonwebtoken";
import config from "../config";
import Role from '../models/role';

export const signUp= async (req,res)=>{
    const {username, email, password, roles} = req.body


    const newUser= new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
    
    if(roles){
        const foundRoles=await Role.find({name: {$in: roles}})
        newUser.roles= foundRoles.map(role => role._id)
    }else{
        const role= await Role.findOne({name: "user"})
        newUser.roles = [role._id]
    }

    const saveUser= await newUser.save()

    const token= jwt.sign({id:saveUser._id},config.SECRET,{
        expiresIn:86400
    })
    res.status(200).json({token})
}

export const signIn= async (req,res)=>{
    const userFound= await User.findOne({email: req.body.email})
    if (!userFound) return res.json.status(400).json({message: "Usuario no Encontrado"})
    console.log(userFound)
    res.json({token: ''})
}
