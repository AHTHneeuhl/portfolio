"use client";

import skills from "@/config/skills";
import Skill from "./Skill";

const Skills: React.FC = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="flex flex-row gap-12 justify-center">
        <Skill title="Languages" list={skills.languages} />
        <Skill title="Frameworks" list={skills.frameworks} />
        <Skill title="Tools" list={skills.tools} />
        <Skill title="UI Libraries" list={skills.uiLibraries} />
      </div>
    </section>
  );
};

export default Skills;
