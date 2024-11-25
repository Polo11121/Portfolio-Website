import { Skill } from "@/components/skill";
import { IconType } from "react-icons";

type SkillProps = {
  skills: (
    | {
        name: string;
        Icon: IconType;
        color?: string;
        url?: undefined;
      }
    | {
        name: string;
        url: string;
        Icon?: undefined;
        color?: undefined;
      }
  )[];
  title: string;
};

export const SkillsList = ({ skills, title }: SkillProps) => (
  <div className="flex flex-col items-center gap-5">
    <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-nowrap">
      {title}
    </h3>
    <div className="grid md:grid-cols-6 grid-cols-3 gap-5 justify-items-center">
      {skills.map((skill) => (
        <Skill key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);
