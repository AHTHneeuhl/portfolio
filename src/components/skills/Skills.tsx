"use client";

import skills from "@/config/skills";
import Skill from "./Skill";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-row justify-center gap-24 bg-neutral-50 py-16">
      <h3 className="text-xl font-semibold text-neutral-900 self-start uppercase tracking-widest cursor-pointer hover:border-b-neutral-300 hover:border-b-2 transition">
        Skills
      </h3>
      <div className="flex flex-row gap-12 items-start w-[672px]">
        <Skill title="Languages" list={skills.languages} />
        <Skill title="Frameworks" list={skills.frameworks} />
        <Skill title="Tools" list={skills.tools} />
        <Skill title="UI Libraries" list={skills.uiLibraries} />
      </div>
    </div>
  );
};

export default Skills;
