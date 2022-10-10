import { Request, Response } from "express";
import { authenticateUser } from "../services/authentication_service";
import { AuthenticationType } from "../types/authentication_type";

async function authenticate(req: Request, res: Response){
    try {
        const credentials: AuthenticationType = req.body;
        const token = await authenticateUser(credentials);
        return res.status(200).send({token});
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export {authenticate};