import { z } from "zod";
import { contactsSchemaResponse } from "./contacts.schemas";

const userSchema = z.object({
  id: z.number(),
  fullname: z.string().max(95),
  email: z.string().email().max(45),
  password: z.string().min(4).max(20),
  phone: z.string().max(11),
  createdAt: z.date().or(z.string()),
  contacts: contactsSchemaResponse.optional(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  contacts: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const multipleUsersSchemaResponse = z.array(userSchemaResponse);

const userSchemaUpdate = userSchema
  .omit({
    id: true,
  })
  .partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  multipleUsersSchemaResponse,
  userSchemaUpdate,
};