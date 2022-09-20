import classNames from "classnames";

interface ExperienceControlsProps {
  className?: string;
}
export const ExperienceControls = ({ className }: ExperienceControlsProps) => (
  <div className={classNames("flex", className)}>
    <button className="mr-2">
      <LeftArrow />
    </button>
    <button>
      <RightArrow />
    </button>
  </div>
);

const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-12 h-12 text-fuchsia-100"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-12 h-12 text-fuchsia-100"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
