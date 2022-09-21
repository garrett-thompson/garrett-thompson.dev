import classnames from "classnames";
import { CSSProperties, ElementType } from "react";

interface Heading1Props {
  children: React.ReactNode;
}
export const Banner = ({ children }: Heading1Props) => (
  <span className="absolute left-[-12px] top-[-74px] origin-bottom-left text-[56px] lg:text-[70px] lg:top-[-82px] heading text-sky-100 opacity-10 lg:opacity-20 tracking-tight rotate-[90deg] whitespace-nowrap">
    {children}
  </span>
);

interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}
export const Heading1 = ({ children, className }: Heading1Props) => (
  <h1
    className={classnames(
      "font-600 text-[36px] lg:text-[54px] heading tracking-tight",
      className
    )}
  >
    {children}
  </h1>
);

interface BodyProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  element?: ElementType;
}
export const Body = ({ children, className, style, element }: BodyProps) => {
  const Element = element || "div";

  return (
    <Element
      className={classnames("text-slate-900 font-350", className)}
      style={style}
    >
      {children}
    </Element>
  );
};
