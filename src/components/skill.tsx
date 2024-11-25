import Image from "next/image";
import { IconType } from "react-icons";

type SkillProps = {
  name: string;
  Icon?: IconType;
  url?: string;
  color?: string;
};

export const Skill = ({ name, Icon, url, color }: SkillProps) => (
  <div className="flex flex-col items-center text-center">
    {Icon && <Icon size={64} color={color} />}
    {url && <Image alt={`${name} image`} src={url} height={64} width={64} />}
    <p>{name}</p>
  </div>
);
