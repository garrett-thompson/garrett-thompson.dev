import type { NextPage } from "next";
import Head from "next/head";
import { List } from "../components/list";
import { Banner, Heading1 } from "../components/typography";
import { ExperienceHeader } from "../components/typography/experience-header";
import workExperience from "../data/work-experience";

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Garrett Thompson - Resume</title>
        <meta
          name="description"
          content="Personal website for Garrett Thompson"
        />
      </Head>

      <Banner>GARRETT THOMPSON</Banner>

      <main className="h-screen w-screen px-6 py-2 lg:px-48 lg:py-12 flex flex-col justify-center">
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
      </main>
    </div>
  );
};

export default Home;
