"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/helpers/constants";
import Link from "next/link";

export const AppSidebar = () => {
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAVIGATION_LINKS.map(({ Icon, href, label }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton
                    asChild
                    variant={pathname === href ? "outline" : "default"}
                  >
                    <Link
                      href={href}
                      onClick={() => {
                        setOpenMobile(false);
                      }}
                    >
                      <Icon />
                      <span>{label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
