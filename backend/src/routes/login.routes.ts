import { Router } from "express";
import { createLoginController } from "../controllers/login.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDetalsValid.middleware";
import { createLoginSchema } from "../schemas/login.schemas";

const loginRoutes: Router = Router();

loginRoutes.post("", ensureDataIsValidMiddleware(createLoginSchema), createLoginController);

export { loginRoutes };