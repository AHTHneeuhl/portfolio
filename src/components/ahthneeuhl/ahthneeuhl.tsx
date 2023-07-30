import { Typography } from "@/components";

type TProps = {
  children?: React.ReactNode;
};

const AHTHneeuhl: React.FC<TProps> = ({ children = "AHTHneeuhl" }) => {
  return (
    <Typography data-cy="logo" fontSize="xl" fontWeight="semibold">
      {children}
    </Typography>
  );
};

export default AHTHneeuhl;
