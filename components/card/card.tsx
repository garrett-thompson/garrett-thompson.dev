import { motion, MotionProps } from "framer-motion";
import classNames from "classnames";

export interface CardProps extends MotionProps {
  token: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...props }: CardProps) => (
  <motion.div
    className={classNames(
      "relative px-4 py-6 rounded-xl bg-fuchsia-100 shadow-xl",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);
