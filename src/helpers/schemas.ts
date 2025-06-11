import { z } from "zod";

export const createContactFormSchema = (t: (key: string) => string) =>
  z.object({
    mail: z.string().email(t("contact.form.errors.invalidEmail")),
    content: z.string().min(1, t("contact.form.errors.emptyMessage")),
  });

export type ContactFormValues = z.infer<
  ReturnType<typeof createContactFormSchema>
>;
