"use client";

import { AnimatePresence } from "framer-motion";
import { Card } from "@/components";
import works from "@/config/works";

const Works: React.FC = () => {
  return (
    <AnimatePresence>
      <div className="py-8 px-6 flex flex-col gap-6">
        {works.map(({ name, description, source, techStack }, index) => (
          <Card
            key={name}
            title={name}
            description={description}
            link={source}
            techStack={techStack}
            index={index}
          />
        ))}
      </div>
    </AnimatePresence>
  );
};

export default Works;
