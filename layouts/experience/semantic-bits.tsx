import { ExperienceHeader } from "../../components/typography/experience-header";
import { List } from "../../components/list";
import { Body } from "../../components/typography";

export const SemanticBitsExperience = () => (
  <div>
    <ExperienceHeader
      dates="Nov 2018 - Apr 2019"
      company="SemanticBits"
      title="Full Stack Developer"
    />
    <List className="mt-3">
      <Body>
        Worked on a full stack app for the Quality Payment Program, a program by
        the Center for Medicare & Medicaid Services. The app enabled health
        service providers to submit information & upload documents to be
        reimbursed for providing high-quality services to their customers.
      </Body>
    </List>
  </div>
);
