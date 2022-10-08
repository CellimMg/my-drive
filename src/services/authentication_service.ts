import { User } from "@prisma/client";
import { readUserByEmail } from "../repositories/user_repository";
import { AuthenticationType } from "../types/authentication_type";
import { generateToken } from "./token_service";

async function authenticateUser(credentials: AuthenticationType){
    const user = await readUserByEmail(credentials.email);
    if(!user || user.password != credentials.password) throw "Credenciais inválidas";
    
    const token = generateToken;
    
    return token;
}


export {authenticateUser};


