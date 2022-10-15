import { motion } from "framer-motion";
import classNames from "classnames";
import styles from "./navigation-controls.module.scss";
import { NavigationAction } from "../../hooks/use-page-navigation";

interface NavigationControlsProps {
  className?: string;
  onNext: React.Dispatch<NavigationAction>;
  onPrev: React.Dispatch<NavigationAction>;
}

export const NavigationControls = ({
  className,
  onNext,
  onPrev,
}: NavigationControlsProps) => {
  return (
    <div
      className={classNames(
        "flex justify-between w-full",
        styles.controls,
        className
      )}
    >
      <LeftArrowButton enabled={true} onClick={onPrev} />
      <RightArrowButton enabled={true} onClick={onNext} />
    </div>
  );
};

interface ButtonProps {
  enabled: boolean;
  onClick: React.Dispatch<any>;
  className?: string;
}

type ButtonVariant = "enabled" | "disabled";

const buttonVariants: Record<ButtonVariant, any> = {
  enabled: {
    color: "var(--controls-enabled-blue)",
  },
  disabled: {
    color: "var(--controls-disabled-blue)",
  },
};

const LeftArrowButton = ({ enabled, onClick, className }: ButtonProps) => {
  const variant: ButtonVariant = enabled ? "enabled" : "disabled";

  return (
    <button
      onClick={onClick}
      className={classNames(
        enabled ? "cursor-pointer" : "cursor-default",
        className
      )}
    >
      <motion.svg
        animate={variant}
        variants={buttonVariants}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={classNames("w-12 h-12", enabled ? "cursor-pointer" : null)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </motion.svg>
    </button>
  );
};

const RightArrowButton = ({ enabled, onClick, className }: ButtonProps) => {
  const variant: ButtonVariant = enabled ? "enabled" : "disabled";

  return (
    <button
      onClick={onClick}
      className={classNames(
        enabled ? "cursor-pointer" : "cursor-default",
        className
      )}
    >
      <motion.svg
        animate={variant}
        variants={buttonVariants}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={classNames("w-12 h-12", enabled ? "cursor-pointer" : null)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </motion.svg>
    </button>
  );
};
