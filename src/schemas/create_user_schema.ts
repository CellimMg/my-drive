import joi from "joi";
import { CreateUserType } from "../types/create_user_type";

const createUserSchema: joi.ObjectSchema<CreateUserType> = joi.object({
    email: joi.string().email().required().messages({
        "any.required": "Você deve informar um email",
        "string.email": "Formato de e-mail inválido!",
        "base.string": "O e-mail deve ser um texto!"
    }),
    name: joi.string().min(4).required().messages({
        "any.required": "Você deve informar um nome!",
        "base.string": "O nome deve ser um texto!",
        "string.min": "O nome deve possuir pelo menos 4 caracteres!"
    }),
    password: joi.string().min(6).required().messages({
        "any.required": "Você deve informar uma senha!",
        "base.string": "A senha deve ser um texto!",
        "string.min": "A senha deve possuir pelo menos 6 caracteres!"
    })
});



export default createUserSchema;