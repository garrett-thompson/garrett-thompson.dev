interface CardProps {
  children?: React.ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <div className="px-4 py-6 w-[640px] h-[100%] rounded-xl bg-stone-100/20 backdrop-blur-md">
    {children}
  </div>
);
