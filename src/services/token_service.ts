import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function generateToken(){
    const token = jwt.sign({}, process.env.JWT_KEY);
    return token;
}


export {generateToken};