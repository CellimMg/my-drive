import { createUser } from "../repositories/user_repository";
import { CreateUserType } from "../types/create_user_type";
import bcrypt from "bcrypt";


async function insertUser(user: CreateUserType){
    await createUser({...user, password: encryptPassword(user.password)});
}

function encryptPassword(password: string){
    return bcrypt.hashSync(password, 8);
}


export {insertUser};
