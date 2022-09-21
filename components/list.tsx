import classnames from "classnames";
import React from "react";

interface ListProps {
  children?: React.ReactNode;
  className?: string;
}

export const List = ({ children, className }: ListProps) => (
  <ul className={classnames("list-disc ml-4 text-slate-900", className)}>
    {React.Children.map(children, (child) => (
      <li className="mt-2">{child}</li>
    ))}
  </ul>
);
