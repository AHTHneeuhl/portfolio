import experiences from "@/config/experience";
import Organization from "./experience/Organization";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-row justify-center gap-24 bg-neutral-50 py-16">
      <h3 className="text-xl font-semibold text-neutral-900 self-start uppercase tracking-widest cursor-pointer hover:border-b-neutral-300 hover:border-b-2 transition">
        Experience
      </h3>
      <div>
        {experiences.map(({ company, location, period, skills, title }) => (
          <Organization
            key={company}
            title={title}
            skills={skills}
            company={company}
            location={location}
            period={period}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
