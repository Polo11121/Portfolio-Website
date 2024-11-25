import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

type SectionProps = {
  Icon: IconType;
  title: string;
} & PropsWithChildren;

export const Section = ({ Icon, title, children }: SectionProps) => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-col items-center">
      <Icon size={64} className="m-auto" />
      <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-nowrap">
        {title}
      </h2>
    </div>
    <div className="flex p-5">{children}</div>
  </div>
);
