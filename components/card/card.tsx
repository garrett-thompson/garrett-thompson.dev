import classNames from "classnames";

export interface CardProps {
  token: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: React.ReactNode;
}

export const Card = ({ children, className, overlay }: CardProps) => (
  <div
    className={classNames(
      "w-[640px] px-4 py-6 rounded-xl shadow-xl bg-fuchsia-50",
      className
    )}
  >
    {overlay}
    {children}
  </div>
);

interface OverlayProps {
  /**
   * Value between 0-1
   */
  opacity: number;
  className?: string;
}
const Overlay = ({ opacity, className }: OverlayProps) => (
  <div
    className={classNames(
      "w-full h-full rounded-xl absolute left-0 top-0 z-0 bg-gray-900",
      className
    )}
    style={{ opacity }}
  ></div>
);
