import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michał Jasiński - Portfolio",
  description: "My personal portfolio website",
  icons: {
    icon: "/profile-image.jpg",
  },
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html
    lang="en"
    suppressHydrationWarning
    className={`${GeistSans.variable} ${GeistMono.variable}`}
  >
    <body>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col w-full">
            <Header />
            {children}
            <Footer />
          </main>
          <Toaster />
        </SidebarProvider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
