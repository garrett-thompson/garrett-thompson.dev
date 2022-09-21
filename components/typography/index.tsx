import classnames from "classnames";
import { CSSProperties, ElementType } from "react";

interface Heading1Props {
  children: React.ReactNode;
}
export const Banner = ({ children }: Heading1Props) => (
  <div className="absolute left-[92px] top-[12px] origin-top-left lg:text-[70px] heading text-sky-100 opacity-20 tracking-tight rotate-90">
    {children}
  </div>
);

interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}
export const Heading1 = ({ children, className }: Heading1Props) => (
  <h1
    className={classnames(
      "font-600 text-[54px] heading tracking-tight",
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
      className={classnames("text-fuchsia-900 font-350", className)}
      style={style}
    >
      {children}
    </Element>
  );
};