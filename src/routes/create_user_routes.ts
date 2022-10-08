import {Router} from "express";
import { validateSchema } from "../middlewares/validate_schema_middleware";


const createUserRoutes = Router();


createUserRoutes.post("/signup", validateSchema);


export default createUserRoutes;