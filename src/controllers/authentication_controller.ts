import { Request, Response } from "express";
import { authenticateUser } from "../services/authentication_service";
import { AuthenticationType } from "../types/authentication_type";

function authenticate(req: Request, res: Response){
    try {
        const credentials: AuthenticationType = req.body;
        const token = authenticateUser(credentials);
        return res.status(200).send({token});
    } catch (error) {
        return res.json(error);
    }
}


export {authenticate};