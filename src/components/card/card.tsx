"use client";

import Image from "next/image";

type TProps = {
  title: string;
  description: string;
  link: string;
  techStack: string[];
  image: string;
};

const Card: React.FC<TProps> = ({
  title,
  description,
  techStack,
  link,
  image,
}) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="group flex p-4 w-full max-w-4xl cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-300 hover:shadow-lg"
    >
      <div className="relative h-28 w-44 shrink-0 overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between gap-2 pl-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
          <p className="text-xs text-neutral-600 line-clamp-2">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
