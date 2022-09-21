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
      "relative w-[calc(100vw - 48px)] lg:w-[640px] px-4 py-6 rounded-xl bg-fuchsia-50 shadow-xl",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);
