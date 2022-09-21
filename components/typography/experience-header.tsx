import classNames from "classnames";
import { BuildingIcon } from "../icons/building";

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
  <div className={classNames("flex flex-col whitespace-pre", className)}>
    <Dates dates={dates} className="mb-2" />
    <TitleAndCompany>{`${title}, ${company}`}</TitleAndCompany>
  </div>
);

const HEADER_TEXT_COLOR = "text-slate-900";

interface CompanyProps {
  children: string;
  className?: string;
}
const TitleAndCompany = ({ children, className }: CompanyProps) => (
  <div
    className={classNames(
      "flex items-center text-[20px] font-500 leading-7 whitespace-normal",
      HEADER_TEXT_COLOR,
      className
    )}
  >
    {children}
  </div>
);

interface DatesProps extends Pick<ExperienceHeaderProps, "dates"> {
  className?: string;
}
const Dates = ({ dates, className }: DatesProps) => (
  <span
    className={classNames(
      "text-[24px] font-200 leading-7",
      HEADER_TEXT_COLOR,
      className
    )}
  >
    {dates}
  </span>
);
