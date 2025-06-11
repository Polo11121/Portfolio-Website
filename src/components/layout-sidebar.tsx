"use client";

import { MyAvatar } from "@/components/my-avatar";
import { useTranslation } from "react-i18next";

export const LayoutSidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="hidden md:flex mt-5 pr-5 border-r space-y-2 flex-col items-center">
      <MyAvatar className="h-40 w-40" />
      <div className="text-center order-2">
        <p className="text-lg tracking-tight">Michał Jasiński</p>
        <p className="text-xl font-bold tracking-tight">{t("sidebar.title")}</p>
      </div>
    </aside>
  );
};
