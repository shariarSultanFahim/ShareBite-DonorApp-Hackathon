import { z } from "zod";

export const donateSchema = z.object({
  drop_type: z.string(),
  images: z.string().optional(),

  description: z.string().nonempty({ message: "Description is required." }),
  assumed_person_for: z.string().min(1),
  donor_id: z.string().min(1),
});

export type FormValues = z.infer<typeof donateSchema>;

export default donateSchema;
