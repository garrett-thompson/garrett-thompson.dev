import { motion } from "framer-motion";
import classNames from "classnames";

interface CardStackControlsProps {
  className?: string;
  onNext: () => void;
  onPrev: () => void;
  cardPosition: number;
  numberOfCards: number;
}
export const CardStackControls = ({
  className,
  onNext,
  onPrev,
  cardPosition,
  numberOfCards,
}: CardStackControlsProps) => (
  <div className={classNames("flex z-10", className)}>
    <LeftArrowButton
      className="mr-3"
      enabled={cardPosition > 0}
      onClick={onPrev}
    />
    <RightArrowButton
      enabled={cardPosition < numberOfCards - 1}
      onClick={onNext}
    />
  </div>
);

interface ButtonProps {
  enabled: boolean;
  onClick: () => void;
  className?: string;
}

type ButtonVariant = "enabled" | "disabled";

const buttonVariants: Record<ButtonVariant, any> = {
  enabled: {
    color: "rgba(190 228 247 1)",
  },
  disabled: {
    color: "rgba(190 228 247 .4)",
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
        animate={enabled ? "enabled" : "disabled"}
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
