import { ProjectList } from "@/components/project-list";
import { Section } from "@/components/section";
import { PROJECTS } from "@/helpers/constants";
import { FaCode } from "react-icons/fa";

const PortfolioPage = () => (
  <Section title="My projects" Icon={FaCode}>
    <ProjectList projects={PROJECTS} />
  </Section>
);

export default PortfolioPage;
