import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

async function validateToken(req: Request, res: Response, next: NextFunction){
    const token = req.body;
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if(err) return res.sendStatus(401);
        next();
    })
}

export {validateToken};
