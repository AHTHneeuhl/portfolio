import { Typography } from "@/components";

type TProps = {
  title: string;
  description: string;
  link: string;
  techStack: string[];
};

const Card: React.FC<TProps> = ({ title, description, techStack, link }) => {
  return (
    <div
      className="flex flex-col gap-4 p-6 cursor-pointer rounded-md hover:bg-gradient-to-t from-primary-300 to-primary-400 transition duration-30"
      onClick={() => window.open(link)}
    >
      <Typography fontSize="md" fontWeight="semibold">
        {title}
      </Typography>
      <Typography fontSize="xs" fontWeight="normal">
        {description}
      </Typography>
      <div className="flex flex-row gap-3">
        {techStack.map((tech) => (
          <Typography key={tech} fontSize="sm" fontWeight="medium">
            {tech}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default Card;
