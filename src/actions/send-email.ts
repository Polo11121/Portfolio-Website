"use server";

import { EmailTemplate } from "@/components/email-template";
import { contactFormSchema } from "@/helpers/schemas";
import { Resend } from "resend";

type SendEmailState = {
  success: boolean;
  error?: string;
};

export const sendEmail = async (_prevState: SendEmailState, data: FormData) => {
  const result = contactFormSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: [process.env.RESEND_TO_EMAIL!],
    subject: "New Contact Form Submission",
    react: EmailTemplate({
      senderName: result.data.mail,
      content: result.data.content,
    }),
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
};
