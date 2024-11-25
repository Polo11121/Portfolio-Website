"use client";

import { useScrollPosition } from "@/hooks/use-scroll-position";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeButton } from "@/components/theme-button";
import { NAVIGATION_LINKS } from "@/helpers/constants";
import { MyAvatar } from "@/components/my-avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const scrollPosition = useScrollPosition();

  const showAvatar = scrollPosition > 240;

  return (
    <header className="container mx-auto flex items-center p-2 md:px-0 border-b sticky top-0 bg-white dark:bg-black z-50">
      <SidebarTrigger className={cn(!isMobile && "hidden")} />
      <nav
        className={cn(
          "flex flex-1 justify-center md:justify-end items-center",
          showAvatar && "md:justify-between"
        )}
      >
        <div
          className={cn(
            "flex md:hidden items-center gap-2",
            showAvatar && "md:flex"
          )}
        >
          <MyAvatar className="w-8 h-8" />
          <p className="order-2 tracking-tight">Michał Jasiński</p>
        </div>
        <ul className={cn("flex justify-end", isMobile && "hidden")}>
          {NAVIGATION_LINKS.map(({ href, Icon, label }) => (
            <li key={label}>
              <Button asChild variant={pathname === href ? "outline" : "ghost"}>
                <Link href={href}>
                  <Icon />
                  {label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeButton />
    </header>
  );
};
