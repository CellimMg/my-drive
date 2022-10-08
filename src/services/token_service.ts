import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function validateToken(token: string){
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if(err) return false;
        return true;
    })
}

function generateToken(){
    const token = jwt.sign({}, process.env.JWT_KEY);
    return token;
}


export {validateToken, generateToken};