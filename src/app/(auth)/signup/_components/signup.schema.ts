import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),

  avatar: z
    .union([
      z
        .instanceof(File, { message: "Image is required" })
        .refine((file) => !file || file.size !== 0 || file.size <= 5000000, {
          message: "Max size exceeded",
        }),
      z.string().optional(), // to hold default image
    ])
    .refine((value) => value instanceof File || typeof value === "string", {
      message: "Image is required",
    }),

  email: z
    .email({ message: "Invalid email address." })
    .nonempty({ message: "Email is required." }),

  phone: z
    .string()
    .nonempty({ message: "Mobile number is required." })
    .trim()
    .regex(/^01\d{9}$/, {
      message: "Phone number must start with 01 and be 11 digits.",
    })
    .length(11, { message: "Phone number must be exactly 11 digits." }),

  address: z.string().nonempty({ message: "Address is required." }),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty({ message: "Password is required." }),
});

export type FormValues = z.infer<typeof signupSchema>;

export default signupSchema;
