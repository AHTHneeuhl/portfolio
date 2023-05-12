type TProps = {
  title: string;
  list: string[];
};

const Skill: React.FC<TProps> = ({ title, list }) => {
  return (
    <div>
      <h4 className="text-lg text-neutral-800 font-medium mb-2">{title}</h4>
      <ul>
        {list.map((item) => (
          <li key={item} className="text-neutral-700 text-sm leading-6">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
