import { z } from "zod";

export const donateSchema = z.object({
  drop_type: z.string(),
  images: z
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

  description: z.string().nonempty({ message: "Description is required." }),
  assumed_person_for: z.string().min(1),
  donor_id: z.string().min(1),
});

export type FormValues = z.infer<typeof donateSchema>;

export default donateSchema;
