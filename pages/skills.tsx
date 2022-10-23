import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/typography";

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
        Skills
      </main>
    </div>
  );
};

export default Home;
