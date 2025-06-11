"use client";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaTools, FaCode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";
import { Section } from "@/components/section";
import { MyAvatar } from "@/components/my-avatar";
import {
  GITHUB_LINK,
  GMAIL_LINK,
  PROJECTS_EN,
  PROJECTS_PL,
} from "@/helpers/constants";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export const HomeView = () => {
  const { t, i18n } = useTranslation();
  const currentProject =
    i18n.language === "pl" ? PROJECTS_PL[0] : PROJECTS_EN[0];

  return (
    <section className="container mx-auto flex flex-col justify-center items-center gap-10 md:gap-16 mt-4 md:mt-0">
      <div className="flex gap-5 items-center justify-center flex-col md:flex-row mt-0 md:mt-[calc(33vh-100px)] ">
        <div className="flex items-center md:items-start flex-[0.6] flex-col gap-6 order-2 md:order-1">
          <div className="flex flex-col items-center md:items-start ">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
              {t("home.title")}
            </h1>
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-nowrap">
              {t("home.subtitle")}
            </h2>
          </div>
          <p className="leading-7 px-2 md:px-0 text-center md:text-start ">
            {t("home.description")}
          </p>
          <div className="flex gap-2.5">
            <Button size="lg" asChild>
              <a href={GMAIL_LINK} target="_blank" rel="noopener noreferrer">
                <SiGmail /> {t("home.contact")}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-24" /> {t("home.github")}
              </a>
            </Button>
          </div>
        </div>
        <MyAvatar className="h-80 w-80" />
      </div>
      <div className="flex flex-col items-center gap-10">
        <Section title={t("home.favoriteTechStack")} Icon={FaTools}>
          <div className="mx-auto flex flex-row items-center gap-2">
            <div className="flex flex-col items-center">
              <RiNextjsFill size={48} />
              <p>{t("home.techStack.nextjs")}</p>
            </div>
            <FiPlus size={36} />
            <div className="flex flex-col items-center">
              <RiTailwindCssFill color="#00ffff" size={48} />
              <p>{t("home.techStack.tailwind")}</p>
            </div>
            <FiPlus size={36} />
            <div className="flex flex-col items-center">
              <SiPrisma size={48} />
              <p>{t("home.techStack.prisma")}</p>
            </div>
          </div>
        </Section>

        <Section
          title={t("home.currentlyWorkingOn")}
          Icon={FaCode}
          className="max-w-[500px]"
        >
          <ProjectCard
            title={currentProject.title}
            githubLink={currentProject.githubLink}
            description={currentProject.description}
            image={currentProject.image}
          />
        </Section>

        <Section title={t("home.myResume")} Icon={IoDocumentTextOutline}>
          <Button asChild size="xl" className="mx-auto">
            <a
              href="/CV_Michał_Jasiński.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              {t("home.download")}
            </a>
          </Button>
        </Section>
      </div>
    </section>
  );
};
