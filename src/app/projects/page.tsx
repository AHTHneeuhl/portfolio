import projects from "@/config/projects";
import Project from "./Project";

const Projects: React.FC = () => {
  return (
    <div className="py-16">
      <div className="flex flex-col gap-6 h-full justify-center items-center">
        {projects.map(({ name, description, source, techStack, picture }) => (
          <Project
            key={name}
            title={name}
            picture={picture}
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
