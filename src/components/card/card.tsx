"use client";

import { Typography } from "@/components";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.3, duration: 0.3 }}
      layout
      className="flex flex-col gap-4 p-6 cursor-pointer rounded-md hover:bg-gradient-to-t from-primary-300 to-primary-400 transition"
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
    </motion.div>
  );
};

export default Card;
