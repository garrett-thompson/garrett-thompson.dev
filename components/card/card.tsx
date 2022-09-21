import { motion, MotionProps } from "framer-motion";
import classNames from "classnames";

export interface CardProps extends MotionProps {
  token: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className, overlay, ...props }: CardProps) => (
  <motion.div
    className={classNames(
      "relative w-[640px] px-4 py-6 rounded-xl shadow-xl bg-fuchsia-50",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);
