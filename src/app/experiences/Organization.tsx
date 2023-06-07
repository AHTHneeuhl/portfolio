"use client";

type TProps = {
  title: string;
  company: string;
  location: string;
  works: string[];
  period: string;
  skills: string[];
};

const Organization: React.FC<TProps> = ({
  title,
  company,
  location,
  works,
  period,
  skills,
}) => {
  return (
    <div className="cursor-pointer border border-white hover:border-neutral-200 p-4 rounded-xl">
      <h4 className="text-lg font-medium text-neutral-800">
        {title} <span className="text-neutral-500 text-sm">at</span> {company}{" "}
      </h4>
      <div className="flex flex-row justify-between items-center">
        <p className="italic text-neutral-500 text-xs">{location}</p>
        <p className="text-teal-700 text-xs font-medium italic">{period}</p>
      </div>
      <ul className="flex flex-row flex-wrap items-center gap-2 my-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-purple-800 text-xs leading-6 bg-purple-50 px-1 italic rounded-md"
          >
            {skill}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col items-start gap-1 my-2">
        {works.map((work) => (
          <li
            key={work}
            className="text-neutral-600 font-medium text-xs leading-6"
          >
            {work}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Organization;
