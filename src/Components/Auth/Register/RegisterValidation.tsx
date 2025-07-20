import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string({ required_error: "First name is required" })
    .min(3, "First name must be between 2 and 50 charecters")
    .max(50, "First name must be between 2 and 50 charecters"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password Confirmation is required" })
    .min(6, "Password must be at least 6 characters"),

  passwordConfirm: z.string({ required_error: "password is required" }).min(1),
});
