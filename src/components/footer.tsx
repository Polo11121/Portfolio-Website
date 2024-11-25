import { Separator } from "@/components/ui/separator";
import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from "@/helpers/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Footer = () => (
  <footer className="border-t container mx-auto p-2 md:px-0 flex flex-col md:flex-row items-center justify-center md:justify-between sticky bottom-0 bg-white dark:bg-black mt-10">
    <p className="text-sm">© 2024 Michał Jasiński. All rights reserved.</p>
    <div className="flex items-center gap-1">
      <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} color="#0077B5" />
      </a>
      <Separator orientation="vertical" className="h-6" />
      <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <Separator orientation="vertical" className="h-6" />
      <a href={GMAIL_LINK} target="_blank" rel="noopener noreferrer">
        <SiGmail size={30} color="#EA4335" />
      </a>
    </div>
  </footer>
);
