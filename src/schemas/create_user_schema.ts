import joi from "joi";
import { CreateUserType } from "../types/create_user_type";

const createUserSchema: joi.ObjectSchema<CreateUserType> = joi.object({});