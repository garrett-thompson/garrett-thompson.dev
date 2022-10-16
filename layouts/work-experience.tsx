import React from "react";
import { List } from "../components/list";
import { PageCarousel } from "../components/page-carousel/page-carousel";
import { Heading1 } from "../components/typography";
import { ExperienceHeader } from "../components/typography/experience-header";
import workExperience from "../data/work-experience";

interface WorkExperienceProps {
  className?: string;
}

export const WorkExperience = ({ className }: WorkExperienceProps) => {
  return (
    <PageCarousel.Container>
      <PageCarousel.Page>
        <Heading1 className="text-sky-600">EXPERIENCE</Heading1>
        {workExperience.map((we) =>
          we.roles.map((role) => (
            <div key={role.key}>
              <ExperienceHeader
                dates={role.dates}
                company={we.company}
                title={role.title}
              />
              <List.UL>
                {role.achievements.map((ach) => (
                  <List.LI key={ach.key}>{ach.value}</List.LI>
                ))}
              </List.UL>
            </div>
          ))
        )}
      </PageCarousel.Page>
      <PageCarousel.Page>Experience</PageCarousel.Page>
      <PageCarousel.Page>Experience</PageCarousel.Page>
      <PageCarousel.Page>Experience</PageCarousel.Page>
      <PageCarousel.Page>Experience</PageCarousel.Page>
    </PageCarousel.Container>
  );
};
