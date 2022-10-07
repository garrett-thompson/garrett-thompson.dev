import { motion } from "framer-motion";
import classNames from "classnames";
import styles from "./controls.module.scss";

interface CardStackControlsProps {
  className?: string;
  setCardPosition: React.Dispatch<React.SetStateAction<number>>;
  cardPosition: number;
  numberOfCards: number;
}

export const CardStackControls = ({
  className,
  setCardPosition,
  cardPosition,
  numberOfCards,
}: CardStackControlsProps) => {
  const atBeginning = cardPosition === 0;
  const atEnd = cardPosition === numberOfCards - 1;

  const nextCard = () => {
    setCardPosition((state) => (state < numberOfCards - 1 ? state + 1 : state));
  };
  const prevCard = () => {
    setCardPosition((state) => (state > 0 ? state - 1 : state));
  };
  const backToBeginning = () => setCardPosition(0);

  return (
    <div
      className={classNames("flex z-10 gap-x-2", styles.controls, className)}
    >
      <LeftArrowButton enabled={!atBeginning} onClick={prevCard} />
      <RightArrowButton enabled={!atEnd} onClick={nextCard} />
      {atEnd ? <BackToBeginningButton onClick={backToBeginning} /> : null}
    </div>
  );
};

interface ButtonProps {
  enabled: boolean;
  onClick: () => void;
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

const BackToBeginningButton = ({
  onClick,
  className,
}: Omit<ButtonProps, "enabled">) => (
  <button
    onClick={onClick}
    className={classNames(
      "text-[color:var(--controls-enabled-blue)]",
      className
    )}
  >
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
      />
    </motion.svg>
  </button>
);
