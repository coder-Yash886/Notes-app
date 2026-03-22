import nodemailer from "nodemailer"
import "dotenv/config"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import handlebars from "handlebars"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export const verifyMail = async(token, email) =>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    const mailConfigurations = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Email Varification",
        html: htmlToSend
    }

    transporter.sendMail(mailConfigurations, function(error, info){
        if(error){
            throw new Error(error)
        }
        console.log("Email send successfully");
        console.log(info)
    })

}