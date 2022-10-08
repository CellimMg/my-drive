import joi from "joi";
import { AuthenticationType } from "../types/authentication_type";
const authenticationSchema: joi.ObjectSchema<AuthenticationType> = joi.object({
    email: joi.string().email().required().messages({
        "any.required": "Você deve informar um email",
        "string.email": "Formato de e-mail inválido!",
        "base.string": "O e-mail deve ser um texto!"
    }),
    password: joi.string().required().messages({})
});


export default authenticationSchema;
