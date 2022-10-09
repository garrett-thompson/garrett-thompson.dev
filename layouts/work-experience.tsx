import React from "react";

import classNames from "classnames";
import { PageCarousel } from "../components/page-carousel/page-carousel";

interface WorkExperienceProps {
  className?: string;
}

export const WorkExperience = ({ className }: WorkExperienceProps) => {
  return (
    <PageCarousel.Container>
      <PageCarousel.Page>Experience</PageCarousel.Page>
      <PageCarousel.Page>Experience</PageCarousel.Page>
      <PageCarousel.Page>Experience</PageCarousel.Page>
      <PageCarousel.Page>Experience</PageCarousel.Page>
      <PageCarousel.Page>Experience</PageCarousel.Page>
    </PageCarousel.Container>
  );
};
