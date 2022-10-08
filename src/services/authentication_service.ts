import { readUserByEmail } from "../repositories/user_repository";
import { AuthenticationType } from "../types/authentication_type";
import { generateToken } from "./token_service";
import bcrypt from "bcrypt";

async function authenticateUser(credentials: AuthenticationType): Promise<string | null>{
	const user = await readUserByEmail(credentials.email);
	if(!user || !passwordsMatch(credentials.password, user.password)) throw "Credenciais inválidas";
	    
	const token = generateToken();
	    
    return token;
}

function passwordsMatch(password: string, passwordEncrypted: string){
    return bcrypt.compareSync(password, passwordEncrypted);
}


export {authenticateUser};


