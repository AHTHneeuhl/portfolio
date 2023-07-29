import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-neutral-0", {
  variants: {
    fontSize: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
    fontWeight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    fontSize: "xs",
    fontWeight: "normal",
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

const Typography: React.FC<TypographyProps> = forwardRef<
  HTMLParagraphElement,
  TypographyProps
>(({ className, fontSize, fontWeight, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={cn(typographyVariants({ fontSize, fontWeight, className }))}
    >
      {children}
    </p>
  );
});

Typography.displayName = "Typography";

export default Typography;
