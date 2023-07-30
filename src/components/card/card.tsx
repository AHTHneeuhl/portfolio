import { Typography } from "@/components";

type TProps = {
  title: string;
  description: string;
  techStack: string[];
};

const Card: React.FC<TProps> = ({ title, description, techStack }) => {
  return (
    <div>
      <Typography fontSize="md" fontWeight="medium">
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
