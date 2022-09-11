import classnames from "classnames";
import { CSSProperties, ElementType } from "react";

interface Heading1Props {
  children: React.ReactNode;
}
export const Banner = ({ children }: Heading1Props) => (
  <div className="lg:text-[104px] heading text-sky-100 opacity-40 tracking-tight">
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
      "font-600 text-[54px] heading text-fuchsia-200 tracking-tight",
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
      className={classnames("text-fuchsia-100 font-350", className)}
      style={style}
    >
      {children}
    </Element>
  );
};
