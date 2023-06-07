"use client";

import Image, { StaticImageData } from "next/image";
import { BsGithub } from "react-icons/bs";

type TProps = {
  title: string;
  picture: StaticImageData;
  description: string;
  source: string;
  techStack: string[];
};

const Project: React.FC<TProps> = ({
  title,
  picture,
  description,
  source,
  techStack,
}) => {
  return (
    <div className="bg-white w-full p-4 hover:border flex flex-row items-center gap-5 hover:border-neutral-200 transition cursor-pointer rounded-xl border border-white">
      <div className="w-32 h-16 overflow-hidden border border-white hover:border hover:border-neutral-200 rounded-md">
        <Image src={picture} alt={title} className="object-cover rounded-md" />
      </div>
      <div className="w-full">
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
              className="text-neutral-700 text-xs leading-6 bg-blue-100 px-1 italic rounded-md"
            >
              {skill}
            </li>
          ))}
        </ul>
        <p className="text-neutral-600 font-medium text-xs mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;
