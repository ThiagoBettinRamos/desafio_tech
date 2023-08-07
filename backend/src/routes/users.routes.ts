import { Router } from "express";
import { createUserController, deleteUserController, retrieveUserController, updateUserController } from "../controllers/users.controller";
import { ensureEmailWontRepeatMiddleware } from "../middlewares/ensureEmailWontRepeat.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDetalsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schemas";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middlewares";

const usersRoutes: Router = Router();

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), ensureEmailWontRepeatMiddleware, createUserController);
usersRoutes.get("", ensureAuthMiddleware, retrieveUserController);
usersRoutes.patch("", ensureDataIsValidMiddleware(userSchemaUpdate), ensureAuthMiddleware, updateUserController);
usersRoutes.delete("", ensureAuthMiddleware, deleteUserController);


export { usersRoutes };