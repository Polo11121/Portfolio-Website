import { PropsWithChildren } from "react";
import { LayoutSidebar } from "@/components/layout-sidebar";

const PagesLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <div className="flex flex-1 container mx-auto">
    <LayoutSidebar />
    <div className="flex-1 mt-5">{children}</div>
  </div>
);

export default PagesLayout;
