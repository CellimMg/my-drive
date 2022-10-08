import { User } from "@prisma/client";
import { client } from "../database/client";

async function readUserByEmail(email: string): Promise<User | null>{
    const user: User = await client.user.findFirst({
        where: {
            email: email
        }    
    });    

    return user;
}


export {readUserByEmail};