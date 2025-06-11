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
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export const ContactView = () => {
  const { t } = useTranslation();

  return (
    <div className="px-5 flex flex-col gap-3">
      <a
        className="flex flex-row items-center gap-1 text-blue-500 font-bold underline hover:text-blue-700"
        href={LINKEDIN_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={32} color="#0077B5" />
        <p>{t("contact.linkedin")}</p>
      </a>
      <a
        className="flex flex-row items-center gap-1 text-blue-500 font-bold underline hover:text-blue-700"
        href={GITHUB_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={32} />
        <p>{t("contact.github")}</p>
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
          <CardTitle>{t("contact.title")}</CardTitle>
          <CardDescription>{t("contact.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
        <CardFooter>
          <p>{t("contact.footer")}</p>
        </CardFooter>
      </Card>
    </div>
  );
};
