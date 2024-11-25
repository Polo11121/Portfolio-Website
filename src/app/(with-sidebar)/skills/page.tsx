import { Section } from "@/components/section";
import { SkillsList } from "@/components/skills-list";
import { Separator } from "@/components/ui/separator";
import { ADVANCED_skills, BASIC_SKILLS } from "@/helpers/constants";
import { FaTools } from "react-icons/fa";

export const SkillsPage = () => (
  <Section title="My Skills" Icon={FaTools}>
    <div className="flex flex-col lg:flex-row justify-center mx-auto">
      <SkillsList skills={ADVANCED_skills} title="Advanced" />
      <div>
        <Separator orientation="vertical" className="hidden lg:flex" />
        <Separator orientation="horizontal" className="lg:hidden my-3" />
      </div>
      <SkillsList skills={BASIC_SKILLS} title="Basic" />
    </div>
  </Section>
);

export default SkillsPage;
