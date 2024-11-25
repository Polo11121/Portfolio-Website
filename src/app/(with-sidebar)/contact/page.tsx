"use client";

import { ContactForm } from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from "@/helpers/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactPage = () => (
  <div className="px-5 flex flex-col gap-3">
    <a
      className="flex flex-row items-center gap-1 text-blue-500 font-bold underline hover:text-blue-700"
      href={LINKEDIN_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin size={32} color="#0077B5" />
      <p>My LinkedIn</p>
    </a>
    <a
      className="flex flex-row items-center gap-1 text-blue-500 font-bold underline hover:text-blue-700"
      href={GITHUB_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub size={32} />
      <p>My Github</p>
    </a>
    <a
      className="flex flex-row items-center gap-1 text-blue-500 font-bold underline hover:text-blue-700"
      href={GMAIL_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SiGmail size={32} color="#EA4335" />
      <p>michal.jasinski121@gmail.com</p>
    </a>
    <Card>
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>
          Feel free to reach out by filling out the form below. I&apos;ll get
          back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
      <CardFooter>
        <p>
          Thank you for reaching out! I’ll do my best to respond within 24–48
          hours.
        </p>
      </CardFooter>
    </Card>
  </div>
);

export default ContactPage;
