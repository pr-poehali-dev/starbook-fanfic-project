
import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Имя пользователя должно содержать не менее 3 символов" })
    .max(20, { message: "Имя пользователя должно содержать не более 20 символов" }),
  email: z
    .string()
    .min(1, { message: "Email обязателен" })
    .email({ message: "Введите корректный email" }),
  password: z
    .string()
    .min(8, { message: "Пароль должен содержать не менее 8 символов" })
    .regex(/[A-Z]/, { message: "Пароль должен содержать хотя бы одну заглавную букву" })
    .regex(/[0-9]/, { message: "Пароль должен содержать хотя бы одну цифру" }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Необходимо принять условия использования",
  }),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
