"use client";

type TProps = {
  title: string;
  list: string[];
};

const Skill: React.FC<TProps> = ({ title, list }) => {
  return (
    <div className="bg-white px-6 py-4 rounded-md">
      <h4 className="text-lg text-neutral-800 font-medium mb-2">{title}</h4>
      <ul>
        {list.map((item) => (
          <li
            key={item}
            className="text-neutral-600 font-medium text-sm leading-6"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
