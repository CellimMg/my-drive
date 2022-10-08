import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { insertUser } from "../services/create_user_service";
import { CreateUserType } from "../types/create_user_type";

async function createUser(req: Request, res: Response){
    try {
        const user: CreateUserType = req.body;
        await insertUser(user);
        return res.sendStatus(201);
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code === "P2002") return res.status(409).send({message: "Este e-mail já está sendo utilizado!"});
        } 
        return res.sendStatus(500);
    }
}


export {createUser};
