import { motion, MotionProps } from "framer-motion";
import classNames from "classnames";
import cardStyles from "./card.module.scss";

export interface CardProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...props }: CardProps) => (
  <motion.div
    className={classNames(
      cardStyles.card,
      "relative px-6 py-5 bg-sky-100 rounded-md shadow-xl overflow-scroll",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);
