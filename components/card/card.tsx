import { motion, MotionProps } from "framer-motion";
import classNames from "classnames";

export interface CardProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...props }: CardProps) => (
  <motion.div
    className={classNames(
      "relative px-6 py-5 rounded-xl bg-sky-100 shadow-xl",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);
