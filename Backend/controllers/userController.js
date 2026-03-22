import { User } from "../models/userModels.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { verifyMail } from "../emailVerify/verifyMail.js";

export const registerUser = async (req,res) =>{

    try{

        const {username, email, password} = req.body;

        if(!username || !email || !password){
            return res.status(400).json({
                success: false,
                message: "All Fields are required"
            })
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User Already exists"
            })
        }

        const hashPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({
            username,
            email,
            password : hashPassword,
        })

        const token =  jwt.sign({id:newUser._id},process.env.SECRET_KEY, {expiresIn:"10m"});
        verifyMail(token,email);

        newUser.token = token;
        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User Register successfully",
            data: newUser
        })

    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}