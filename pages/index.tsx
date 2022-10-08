import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Heading1 } from "../components/typography";
import { WorkExperience } from "../layouts/work-experience";

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

      <main className="full-height-fix w-screen px-6 py-2 lg:px-48 lg:py-12 flex flex-col justify-center">
        <div className="flex flex-col h-[95%] lg:h-full">
          <Heading1 className="text-sky-200">EXPERIENCE</Heading1>
          <div className="flex flex-col flex-1 mb-2 lg:mb-6 space-x-6">
            <WorkExperience className="flex-auto" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
