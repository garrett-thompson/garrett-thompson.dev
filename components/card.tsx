import classNames from "classnames";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div
    className={classNames(
      "min-w-[640px] px-4 py-6 rounded-xl bg-stone-100/20 backdrop-blur-md",
      className
    )}
  >
    {children}
  </div>
);
