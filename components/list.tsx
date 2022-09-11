import classnames from "classnames";

interface ListProps {
  items: React.ReactNode[];
  className?: string;
}

export const List = ({ items, className }: ListProps) => (
  <ul className={classnames("list-disc ml-4 text-stone-200", className)}>
    {items.map((item) => {
      return <li className="mt-2">{item}</li>;
    })}
  </ul>
);
