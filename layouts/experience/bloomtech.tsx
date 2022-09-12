import { ExperienceHeader } from "../../components/experience-header";
import { List } from "../../components/list";
import { Body } from "../../components/typography";

export const BloomTechExperience = () => (
  <div>
    <ExperienceHeader
      dates="May 2021 - Mar 2022"
      company="BloomTech (fka Lambda School)"
      title="Senior Software Engineer & Team Lead"
    />
    <List
      className="mt-3"
      items={[
        <Body>
          Helped design a modern tech stack for greenfield projects & worked to
          consolidate older repos into this standard tech stack. It standardized
          skillsets & design patterns across the eng org, leading to increased
          developer velocity & happiness.
        </Body>,
        <Body>
          Built a new learner dashboard to simplify tracking their progress
          through the curriculum. Laid the foundation for a custom LMS.
        </Body>,
        <Body>
          Pair programmed with the team as needed to fix bugs and/or add new
          features. Met with & mentored junior team members. Scoped work for the
          team and ensured each member owned a piece of the work that would
          challenge them appropriately.
        </Body>,
      ]}
    />
    <ExperienceHeader
      dates="Apr 2019 - May 2021"
      company="BloomTech (fka Lambda School)"
      title="Software Engineer"
      className="mt-4"
    />
    <List
      className="mt-3"
      items={[
        <Body>
          Created a platform allowing us to administer & grade quizzes. Quizzes
          had dynamic question options based on the authenticated learner.
        </Body>,
        <Body>
          Migrated business-critical data & processes off of Airtable and into a
          custom system powered by Postgres & Node.
        </Body>,
        <Body>
          Automated student course enrollments as they progress through the
          curriculum via various cron jobs & kafka event-based systems.
          Integrated with the Canvas LMS API.
        </Body>,
        <Body>
          Created & shipped a few private npm libraries, including a React
          component library, a typed Canvas LMS client library, and an
          opinionated Kafka client suited to our needs.
        </Body>,
      ]}
    />
  </div>
);
