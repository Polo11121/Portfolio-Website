"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pl" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleLanguage}>
      {i18n.language === "en" ? "PL" : "EN"}
    </Button>
  );
};
