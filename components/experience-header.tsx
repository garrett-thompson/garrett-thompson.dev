import { BuildingIcon } from "./icons/building";

interface ExperienceHeaderProps {
  dates: string;
  company: string;
  title: string;
  className?: string;
}

export const ExperienceHeader = ({
  dates,
  company,
  title,
  className,
}: ExperienceHeaderProps) => (
  <div className={className}>
    <Company company={company} />
    <div className="whitespace-pre">
      <Title title={title} />
      <Dates dates={dates} />
    </div>
  </div>
);

const Company = ({ company }: Pick<ExperienceHeaderProps, "company">) => (
  <div className="flex items-center text-stone-100 text-[32px] font-700 leading-7">
    <BuildingIcon className="w-8 h-8 mr-1" />
    {company}
  </div>
);

const Title = ({ title }: Pick<ExperienceHeaderProps, "title">) => (
  <span className="text-stone-100 text-[20px] font-500 leading-7">
    {title},{" "}
  </span>
);

const Dates = ({ dates }: Pick<ExperienceHeaderProps, "dates">) => (
  <span className="text-stone-100 text-[20px] font-200 leading-7">{dates}</span>
);
