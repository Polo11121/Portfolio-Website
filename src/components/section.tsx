import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

type SectionProps = {
  Icon: IconType;
  title: string;
  className?: string;
} & PropsWithChildren;

export const Section = ({ Icon, title, children, className }: SectionProps) => (
  <div className={cn("flex flex-col gap-5", className)}>
    <div className="flex flex-col items-center">
      <Icon size={64} className="m-auto" />
      <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-nowrap">
        {title}
      </h2>
    </div>
    <div className="flex p-5">{children}</div>
  </div>
);
