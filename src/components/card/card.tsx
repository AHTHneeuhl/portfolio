"use client";

import { Typography } from "@/components";

type TProps = {
  title: string;
  description: string;
  link: string;
  techStack: string[];
  index: number;
};

const Card: React.FC<TProps> = ({
  title,
  description,
  techStack,
  link,
  index,
}) => {
  return (
    <div
      className="flex flex-col gap-4 p-6 hover:shadow-lg hover:border-2 hover:scale-95 hover:border-neutral-300 cursor-pointer hover:bg-neutral-50 rounded-lg transition duration-500 ease-in-out"
      onClick={() => window.open(link)}
    >
      <Typography fontSize="md" fontWeight="semibold">
        {title}
      </Typography>
      <Typography fontSize="xs" fontWeight="normal">
        {description}
      </Typography>
      <div className="flex flex-row gap-3">
        {techStack.map((tech) => (
          <Typography key={tech} fontSize="sm" fontWeight="medium">
            {tech}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default Card;
