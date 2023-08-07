import {z} from "zod";
import { createLoginSchema } from "../schemas/login.schemas";

type TLoginRequest = z.infer<typeof createLoginSchema>

export { TLoginRequest };