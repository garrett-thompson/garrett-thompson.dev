import classNames from "classnames";

export interface CardProps {
  token: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div
    className={classNames(
      "min-w-[640px] px-4 py-6 rounded-xl shadow-xl bg-fuchsia-50 backdrop-blur-lg",
      className
    )}
  >
    {children}
  </div>
);
