interface Heading1Props {
  children: React.ReactNode;
}
export const Heading1 = ({ children }: Heading1Props) => (
  <h1 className="font-600">{children}</h1>
);
