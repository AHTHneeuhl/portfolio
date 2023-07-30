"use client";

import { Card } from "@/components";
import works from "@/config/works";

const Works: React.FC = () => {
  return (
    <div className="py-8 px-6 flex flex-col gap-6">
      {works.map(({ name, description, source, techStack }) => (
        <Card
          key={name}
          title={name}
          description={description}
          link={source}
          techStack={techStack}
        />
      ))}
    </div>
  );
};

export default Works;
