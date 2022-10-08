import classnames from "classnames";
import React, { ReactNode } from "react";

interface ULProps {
  children: ReactNode;
  className?: string;
}

const UL = ({ children, className }: ULProps) => (
  <ul className={classnames("list-disc ml-4 text-slate-900", className)}>
    {children}
  </ul>
);

interface LIProps {
  children: ReactNode;
  className?: string;
}

const LI = ({ children, className }: LIProps) => (
  <li className={classnames("mt-2", className)}>{children}</li>
);

export const List = {
  UL,
  LI,
};
