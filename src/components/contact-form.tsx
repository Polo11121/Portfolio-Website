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

export const ContactForm = () => {
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
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your email address"
                  type="email"
                  disabled={isPending}
                />
              </FormControl>
              <FormDescription>
                I&apos;ll use this email to get back to you.
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
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Write your message here"
                  rows={5}
                  minLength={1}
                  className="resize-none"
                  disabled={isPending}
                />
              </FormControl>
              <FormDescription>
                Please provide details about your inquiry or message.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center gap-2">
          <Button disabled={isPending} type="submit">
            Send Message
          </Button>
          {isPending && <Loader2 className="animate-spin" />}
        </div>
      </form>
    </Form>
  );
};
