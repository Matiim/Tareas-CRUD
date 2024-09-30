import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username requerido",
  }),
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email invalido"
    }),
  password: z
    .string({
      required_error: "Password requerido",
    })
    .min(6, {
      message: "El password requiere mas de 6 caracteres ",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email invalido"
    }),
  password: z
    .string({
      required_error: "Password requerido",
    })
    .min(6, {
      message: "El password requiere mas de 6 caracteres ",
    }),
});
