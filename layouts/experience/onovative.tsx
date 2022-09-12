import { ExperienceHeader } from "../../components/experience-header";
import { List } from "../../components/list";
import { Body } from "../../components/typography";

export const OnovativeExperience1 = () => (
  <div>
    <ExperienceHeader
      dates="Feb 2017 - Nov 2018"
      company="Onovative"
      title="Software Engineer II"
    />
    <List
      className="mt-3"
      items={[
        <Body>
          Updated & redesigned parts of our on-premises software product to live
          in the AWS cloud. This improved observability & allowed us to ship
          updates much more easily.
        </Body>,
        <Body>
          Added a new communication channel (surveys) to our omni-channel
          marketing product. It was an end-to-end solution including a survey
          creation tool, a survey taking tool, and all the necessary
          infrastructure to send & host personalized surveys for our customers'
          customers.
        </Body>,
      ]}
    />
  </div>
);

export const OnovativeExperience2 = () => (
  <div>
    <ExperienceHeader
      dates="May 2016 - Feb 2017"
      company="Onovative"
      title="Software Engineer I"
      className="mt-4"
    />
    <List
      className="mt-3"
      items={[
        <Body>
          Contributed to existing C#, JavaScript, and Ruby codebases. Added
          features & fixed bugs across UIs, SQL queries, and API endpoints.
        </Body>,
      ]}
    />
  </div>
);
