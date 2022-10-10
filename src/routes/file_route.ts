import {Router} from "express";
import { readFile, saveFile } from "../controllers/file_controller";
import multerMiddleware from "../middlewares/multer_middleware";
import { validateToken } from "../middlewares/validate_token_middleware";

const fileRoutes = Router();

fileRoutes.post("/file", validateToken, multerMiddleware, saveFile);
fileRoutes.get("/file", validateToken, readFile);

export default fileRoutes;