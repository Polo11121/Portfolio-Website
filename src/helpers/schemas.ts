import { z } from "zod";

export const contactFormSchema = z.object({
  mail: z.string().email("Invalid email address"),
  content: z.string().min(1, "Message cannot be empty"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
