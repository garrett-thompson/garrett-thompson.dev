import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/typography";
import { WorkExperience } from "../layouts/work-experience";

const Navigator: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Garrett Thompson - Resume</title>
        <meta
          name="description"
          content="Personal website for Garrett Thompson"
        />
      </Head>

      <Banner>GARRETT THOMPSON</Banner>

      <main className="h-screen w-screen px-6 py-2 lg:px-48 lg:py-12 flex flex-col justify-center">
        <WorkExperience />
      </main>
    </div>
  );
};

export default Navigator;