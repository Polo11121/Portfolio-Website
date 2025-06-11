"use client";

import { useContactForm } from "@/helpers/use-contact-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();
  const { form, isPending, onSubmit, sendEmailAction } = useContactForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        action={sendEmailAction}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="mail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.email.label")}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t("contact.form.email.placeholder")}
                  type="email"
                  disabled={isPending}
                />
              </FormControl>
              <FormDescription>
                {t("contact.form.email.description")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.message.label")}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={t("contact.form.message.placeholder")}
                  rows={5}
                  minLength={1}
                  className="resize-none"
                  disabled={isPending}
                />
              </FormControl>
              <FormDescription>
                {t("contact.form.message.description")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center gap-2">
          <Button disabled={isPending} type="submit">
            {t("contact.form.send")}
          </Button>
          {isPending && <Loader2 className="animate-spin" />}
        </div>
      </form>
    </Form>
  );
};
