
import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Имя пользователя должно содержать минимум 3 символа" })
    .max(50, { message: "Имя пользователя не должно превышать 50 символов" }),
  email: z
    .string()
    .min(1, { message: "Email обязателен" })
    .email({ message: "Введите корректный email" }),
  password: z
    .string()
    .min(8, { message: "Пароль должен содержать минимум 8 символов" })
    .max(100, { message: "Пароль не должен превышать 100 символов" })
    .regex(/[A-Z]/, { message: "Пароль должен содержать хотя бы одну заглавную букву" })
    .regex(/[0-9]/, { message: "Пароль должен содержать хотя бы одну цифру" }),
  acceptTerms: z
    .boolean()
    .refine(val => val === true, { message: "Вы должны принять условия использования" })
});
