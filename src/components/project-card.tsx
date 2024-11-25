import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  applicationLink?: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  applicationLink,
  githubLink,
}: ProjectCardProps) => (
  <Card className="cursor-pointer w-full">
    <a
      href={applicationLink || githubLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CardHeader className="h-[110px]">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="relative h-[200px] w-fukk border overflow-hidden rounded-md">
          <Image
            src={image}
            alt={`${title} image`}
            fill
            className="object-fill"
          />
        </div>
      </CardContent>
    </a>
    <CardFooter>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="	text-blue-500 font-bold underline hover:text-blue-700"
      >
        {githubLink}
      </a>
    </CardFooter>
  </Card>
);
