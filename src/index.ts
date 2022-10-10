import express from "express";
import cors from "cors";
import authenticationRoutes from "./routes/authentication_routes";
import createUserRoutes from "./routes/create_user_routes";
import dotenv from "dotenv";
import fileRoutes from "./routes/file_route";
dotenv.config();

const server = express();


server.use(cors());
server.use(express.json());
server.use(authenticationRoutes);
server.use(createUserRoutes);
server.use(fileRoutes);




server.listen(process.env.PORT || 5000, () => console.log(`Server running at ${process.env.PORT || 5000}`));







