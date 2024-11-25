import { ProjectCard } from "./project-card";

type ProjectListProps = {
  projects: {
    title: string;
    githubLink: string;
    description: string;
    image: string;
    applicationLink?: string;
  }[];
};

export const ProjectList = ({ projects }: ProjectListProps) => (
  <div className="grid lg:grid-cols-2  grid-cols-1 gap-5 justify-items-center xl:grid-cols-3">
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </div>
);
