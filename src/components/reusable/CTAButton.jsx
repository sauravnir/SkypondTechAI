import { ChevronRight } from "lucide-react";
import Button from "./Button";
import clsx from "clsx";


// Making the CTA button reusable
const CTAButton = ({
  children,
  icon = ChevronRight,
  showIcon = true,
  variant = "default",
  size = "lg",
  className,
  ...props
}) => {
  const Icon = icon;

  return (
    <div className="group inline-block">
      <Button
        variant={variant}
        size={size}
        className={clsx(
          "text-button text-primary-foreground flex items-center gap-1 hover:bg-accent",
          className
        )}
        {...props}
      >
        {children}

        {showIcon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
            <Icon />
          </span>
        )}
      </Button>
    </div>
  );
};

export default CTAButton;
