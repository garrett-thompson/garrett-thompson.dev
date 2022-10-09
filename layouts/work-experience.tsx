import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { usePageNavigation } from "../hooks/use-page-navigation";
import classNames from "classnames";
import { NavigationControls } from "../components/navigation-controls/navigation-controls";
import { CardPage } from "../components/card/card-page";

interface WorkExperienceProps {
  className?: string;
}

export const WorkExperience = ({ className }: WorkExperienceProps) => {
  const windowWidth = useWindowWidth();
  const [state, dispatch] = usePageNavigation(6);

  return (
    <div className={classNames(className)}>
      <NavigationControls
        onNext={() => dispatch({ type: "go_forward" })}
        onPrev={() => dispatch({ type: "go_back" })}
      />
      <CardPage {...state} pageNumber={1} windowWidth={windowWidth} />
      <CardPage {...state} pageNumber={2} windowWidth={windowWidth} />
      <CardPage {...state} pageNumber={3} windowWidth={windowWidth} />
      <CardPage {...state} pageNumber={4} windowWidth={windowWidth} />
      <CardPage {...state} pageNumber={5} windowWidth={windowWidth} />
      <CardPage {...state} pageNumber={6} windowWidth={windowWidth} />
    </div>
  );
};
