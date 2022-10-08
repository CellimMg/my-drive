import { User } from "@prisma/client";
import { client } from "../database/client";
import { CreateUserType } from "../types/create_user_type";

async function readUserByEmail(email: string): Promise<User | null>{
    const user: User = await client.user.findFirst({
        where: {
            email: email
        }    
    });    

    return user;
}


async function createUser(user: CreateUserType){
    await client.user.create({data: user});
}


export {readUserByEmail, createUser};