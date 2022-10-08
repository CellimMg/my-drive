import {Router} from "express";
import { authenticate } from "../controllers/authentication_controller";
import { validateSchema } from "../middlewares/validate_schema_middleware";
import authenticationSchema from "../schemas/authentication_schema";


const authenticationRoutes = Router();

authenticationRoutes.post("/signin", validateSchema(authenticationSchema), authenticate);

export default authenticationRoutes;