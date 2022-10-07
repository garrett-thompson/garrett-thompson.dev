import { WorkExperienceData } from ".";

const bloomtechWorkExperience: WorkExperienceData = {
  company: "BloomTech",
  roles: [
    {
      key: "bt-1",
      title: "Senior Software Engineer & Team Lead",
      dates: "May 2021 - Mar 2022",
      achievements: [
        "Helped design a modern tech stack for greenfield projects & worked to consolidate older repos into this standard tech stack. It standardized skillsets & design patterns across the eng org, leading to increased developer velocity & happiness.",
        "Built a new learner dashboard to simplify tracking their progress through the curriculum. Laid the foundation for a custom LMS.",
        "Pair programmed with the team as needed to fix bugs and/or add new features. Met with & mentored junior team members. Scoped work for the team and ensured each member owned a piece of the work that would challenge them appropriately.",
      ],
    },
    {
      key: "bt-2",
      title: "Software Engineer",
      dates: "Apr 2019 - May 2021",
      achievements: [
        "Created a platform allowing us to administer & grade quizzes. Quizzes had dynamic question options based on the authenticated learner.",
        "Migrated business-critical data & processes off of Airtable and into a custom system powered by Postgres & Node.",
        "Automated student course enrollments as they progress through the curriculum via various cron jobs & kafka event-based systems. Integrated with the Canvas LMS API.",
        "Created & shipped a few private npm libraries, including a React component library, a typed Canvas LMS client library, and an opinionated Kafka client suited to our needs.",
      ],
    },
  ],
};

export default bloomtechWorkExperience;
