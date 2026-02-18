"use client";

import { Card } from "@/components";
import projects from "@/config/projects";

type TProps = {
  title: string;
  description: string;
  link: string;
  techStack: string[];
  image: string;
  index: number;
};

const Projects: React.FC = () => {
  return (
    <div className="py-8 px-6 flex flex-col gap-4">
      {projects.map(({ id, title, description, link, image, techStack }) => (
        <Card
          key={id}
          title={title}
          description={description}
          link={link}
          techStack={techStack}
          image={image}
        />
      ))}
    </div>
  );
};

export default Projects;
