interface CardProps {
  children?: React.ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <div className="px-4 py-6 rounded-xl bg-stone-100/10 backdrop-blur-md">
    {children}
  </div>
);
