"use client";

type TProps = {
  title: string;
  company: string;
  location: string;
  period: string;
  skills: string[];
};

const Organization: React.FC<TProps> = ({
  title,
  company,
  location,
  period,
  skills,
}) => {
  return (
    <div className="mb-6 w-full">
      <h4 className="text-lg font-medium text-neutral-800">
        {title} <span className="text-neutral-500 text-sm">at</span> {company}{" "}
      </h4>
      <div className="flex flex-row justify-between items-center">
        <p className="italic text-neutral-500 text-xs">{location}</p>
        <p className="text-teal-700 text-xs italic">{period}</p>
      </div>

      <ul className="flex flex-row flex-wrap items-center gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-neutral-700 text-xs leading-6 bg-neutral-100 px-1 italic rounded-md"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Organization;
