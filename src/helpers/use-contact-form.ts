import { useActionState, useEffect, useTransition } from "react";
import { contactFormSchema, ContactFormValues } from "@/helpers/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/actions/send-email";
import { toast } from "sonner";

export const useContactForm = () => {
  const [state, sendEmailAction] = useActionState(sendEmail, {
    success: false,
    error: undefined,
  });
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      content: "",
      mail: "",
    },
  });

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state.success) {
      toast.success("Message sent successfully!");
      form.reset({
        mail: "",
        content: "",
      });
    }
  }, [state.error, state.success, form]);

  const onSubmit = (values: ContactFormValues) =>
    startTransition(() => {
      const formData = new FormData();
      formData.append("mail", values.mail);
      formData.append("content", values.content);

      sendEmailAction(formData);
    });

  return { form, onSubmit, sendEmailAction, isPending };
};
