import projects from "@/config/projects";
import Project from "./Project";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-row justify-center gap-24 bg-neutral-50 py-16">
      <h3 className="text-xl font-semibold text-neutral-900 self-start uppercase tracking-widest cursor-pointer hover:border-b-neutral-300 hover:border-b-2 transition">
        Projects
      </h3>
      <div className="flex flex-col gap-6">
        {projects.map(({ name, description, source, techStack }) => (
          <Project
            key={name}
            title={name}
            description={description}
            source={source}
            techStack={techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
