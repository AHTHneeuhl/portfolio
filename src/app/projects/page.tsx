import projects from "@/config/projects";
import Project from "./Project";

const Projects: React.FC = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="flex flex-col gap-6 justify-center items-center">
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
    </section>
  );
};

export default Projects;
