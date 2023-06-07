import experiences from "@/config/experiences";
import Organization from "./Organization";

const Experiences: React.FC = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="flex flex-col gap-6">
        {experiences.map(
          ({ company, location, period, works, skills, title }) => (
            <Organization
              key={company}
              title={title}
              skills={skills}
              works={works}
              company={company}
              location={location}
              period={period}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Experiences;
