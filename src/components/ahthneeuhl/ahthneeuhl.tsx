import { Typography } from "@/components";

type TProps = {
  children?: React.ReactNode;
};

const AHTHneeuhl: React.FC<TProps> = ({ children = "AHTHneeuhl" }) => {
  return (
    <Typography fontSize="xl" fontWeight="semibold">
      {children}
    </Typography>
  );
};

export default AHTHneeuhl;
