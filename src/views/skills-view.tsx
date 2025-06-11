"use client";

import { Section } from "@/components/section";
import { SkillsList } from "@/components/skills-list";
import { Separator } from "@/components/ui/separator";
import { ADVANCED_skills, BASIC_SKILLS } from "@/helpers/constants";
import { FaTools } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const SkillsView = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("skills.title")} Icon={FaTools}>
      <div className="flex flex-col lg:flex-row justify-center mx-auto">
        <SkillsList skills={ADVANCED_skills} title={t("skills.advanced")} />
        <div>
          <Separator orientation="vertical" className="hidden lg:flex" />
          <Separator orientation="horizontal" className="lg:hidden my-3" />
        </div>
        <SkillsList skills={BASIC_SKILLS} title={t("skills.basic")} />
      </div>
    </Section>
  );
};
