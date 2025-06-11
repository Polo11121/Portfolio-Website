"use client";

import { ProjectList } from "@/components/project-list";
import { PROJECTS_EN, PROJECTS_PL } from "@/helpers/constants";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export const PortfolioView = () => {
  const { i18n } = useTranslation();
  const projects = i18n.language === "pl" ? PROJECTS_PL : PROJECTS_EN;

  return (
    <div className="px-5">
      <ProjectList projects={projects} />
    </div>
  );
};
