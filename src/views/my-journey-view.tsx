"use client";

import { Section } from "@/components/section";
import { RiTreasureMapLine } from "react-icons/ri";
import { Timeline } from "@/components/timeline";
import { useTranslation } from "react-i18next";
import "@/i18n/config";

export const MyJourneyView = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("journey.title")} Icon={RiTreasureMapLine}>
      <Timeline />
    </Section>
  );
};
