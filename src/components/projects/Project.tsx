"use client";

import { BsGithub } from "react-icons/bs";

type TProps = {
  title: string;
  description: string;
  source: string;
  techStack: string[];
};

const Project: React.FC<TProps> = ({
  title,
  description,
  source,
  techStack,
}) => {
  return (
    <div className="w-[720px]">
      <div className="flex flex-row justify-between items-center">
        <h4 className="text-lg font-medium text-neutral-800">{title}</h4>
        <BsGithub
          size={20}
          onClick={() => window.open(source, "_blank")}
          cursor="pointer"
        />
      </div>
      <ul className="flex flex-row flex-wrap items-center gap-2">
        {techStack.map((skill) => (
          <li
            key={skill}
            className="text-neutral-700 text-xs leading-6 bg-neutral-100 px-1 italic rounded-md"
          >
            {skill}
          </li>
        ))}
      </ul>
      <p className="text-neutral-500 text-xs mt-1">{description}</p>
    </div>
  );
};

export default Project;
