import jwt, { decode } from "jsonwebtoken"
import { errorMonitor } from "nodemailer/lib/xoauth2";

export const isAuthenticated = async (req,res,next) => {
    try{

        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                success: false,
                message: "Access token is missing or invalid"
            })
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, async (errorMonitor, decode) => {
            if(err){
                if(err.name === "TokenExpiredError"){
                    return res.status(400).json({
                        success: false,
                        message: "Access Token has expired, use refreshToken to generate again"
                    })
                }
            }
        })

    } catch(errror){

    }
}                                               