"use client";

import ExperienceCard from "./experienceCard";
import experiences from "@/config/experiences";

const Experiences = () => {
  return (
    <div className="flex flex-col width-xl gap-4">
      {experiences.map(({ id, role, company, duration, description }) => (
        <ExperienceCard
          key={id}
          role={role}
          company={company}
          duration={duration}
          description={description}
        />
      ))}
    </div>
  );
};

export default Experiences;
