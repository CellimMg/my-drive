import {Router} from "express";
import { createUser } from "../controllers/create_user_controller";
import { validateSchema } from "../middlewares/validate_schema_middleware";
import createUserSchema from "../schemas/create_user_schema";

const createUserRoutes = Router();

createUserRoutes.post("/signup", validateSchema(createUserSchema), createUser);

export default createUserRoutes;